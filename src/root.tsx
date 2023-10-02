// @refresh reload
import { Suspense } from 'solid-js'
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
} from 'solid-start'
import './root.css'
import Navbar from '~/components/layout/Navbar'

export default function Root() {
  return (
    <Html lang='en'>
      <Head>
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Body class='dark:bg-neutral-900 dark:text-white'>
        <ErrorBoundary>
          <Suspense>
            <main class='mx-auto max-w-3xl px-5 pt-10 md:px-0'>
              <Navbar />
              <div class='prose prose-neutral max-w-none dark:prose-invert'>
                <Routes>
                  <FileRoutes />
                </Routes>
              </div>
            </main>
          </Suspense>
        </ErrorBoundary>
        <script
          // eslint-disable-next-line solid/no-innerhtml
          innerHTML={`
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (_) {}
          `}
        />
        <Scripts />
      </Body>
    </Html>
  )
}
