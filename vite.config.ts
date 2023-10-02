import solid from 'solid-start/vite'
import vercel from 'solid-start-vercel'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    {
      ...(await import('@mdx-js/rollup')).default({
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx',
      }),
      enforce: 'pre',
    },
    solid({
      adapter: vercel({ edge: true }),
      extensions: ['.mdx', '.md'],
    }),
    eslint(),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})
