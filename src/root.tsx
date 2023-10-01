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
  Title,
} from 'solid-start'
import './root.css'
import Navbar from '~/components/layout/Navbar'

const META = {
  title: 'Jasmin',
  description: 'Software developer from Bern, Switzerland',
  url: 'https://jasi.dev',
}

export default function Root() {
  return (
    <Html lang='en'>
      <Head>
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />

        <Title>{META.title}</Title>
        <Meta name='description' content={META.description} />

        <Meta name='og:type' content='website' />
        <Meta name='og:locale' content='en_US' />
        <Meta name='og:title' content={META.title} />
        <Meta name='og:site_name' content={META.title} />
        <Meta name='og:description' content={META.description} />
        <Meta name='og:url' content={META.url} />

        <Meta name='twitter:card' content='summary' />
        <Meta name='twitter:title' content={META.title} />
        <Meta name='twitter:description' content={META.description} />
        <Meta name='twitter:url' content={META.url} />
      </Head>
      <Body class='dark:bg-neutral-950 dark:text-white'>
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
