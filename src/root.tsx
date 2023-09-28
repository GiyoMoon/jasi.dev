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
import Navbar from '~/components/Navbar'

export default function Root() {
  return (
    <Html lang='en'>
      <Head>
        <Title>jasi.dev</Title>
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <main class='mx-auto max-w-3xl px-2 pt-20 md:px-0'>
              <Navbar />
              <div class='prose max-w-none'>
                <Routes>
                  <FileRoutes />
                </Routes>
              </div>
            </main>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  )
}
