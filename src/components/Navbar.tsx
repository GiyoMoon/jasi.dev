import { A } from '@solidjs/router'
import type { VoidComponent } from 'solid-js'

const Navbar: VoidComponent = () => {
  return (
    <div class='mb-5 rounded-b border-b-4 border-purple-500'>
      <div class='flex items-center justify-between'>
        <p class='text-2xl font-extrabold'>Jasmin Nötzli</p>
        <p class='text-sm text-purple-950'>Web Developer</p>
      </div>
      <div class='flex justify-between'>
        <div class='mt-2 flex space-x-2'>
          <A
            href='/'
            class='rounded-t bg-purple-100 px-2 py-1 font-bold text-purple-600'
            activeClass='bg-purple-200 text-purple-900'
            end
          >
            Home
          </A>
          <A
            href='/blog'
            class='rounded-t bg-purple-100 px-2 py-1 font-bold text-purple-600'
            activeClass='bg-purple-200 text-purple-900'
          >
            Blog
          </A>
          <A
            href='/talks'
            class='rounded-t bg-purple-100 px-2 py-1 font-bold text-purple-600'
            activeClass='bg-purple-200 text-purple-900'
          >
            Talks
          </A>
        </div>
        <div class='flex items-center space-x-2'>
          <A
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/GiyoMoon'
          >
            <span class='sr-only'>Me on Github</span>
            <svg
              viewBox='0 0 98 96'
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z'
                fill='#24292f'
              />
            </svg>
          </A>
          <A
            target='_blank'
            rel='noopener noreferrer'
            href='https://x.com/giyo_moon'
          >
            <span class='sr-only'>Me on X (formerly Twitter)</span>
            <svg
              viewBox='0 0 240 240'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
            >
              <path
                d='M120 240C186.274 240 240 186.274 240 120C240 53.7258 186.274 0 120 0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240Z'
                fill='black'
              />
              <path
                opacity='0.15'
                d='M133.9 112.2L180.3 58.2998H169.3L129 105.1L96.8002 58.2998H59.7002L108.3 129.1L59.7002 185.6H70.7002L113.2 136.2L147.2 185.6H184.3L133.9 112.2ZM118.8 129.8L113.9 122.7L74.6002 66.5998H91.5002L123.2 111.9L128.1 119L169.2 177.8H152.3L118.8 129.8Z'
                fill='#D1D1D1'
              />
              <path
                d='M131.9 110.2L178.3 56.2998H167.3L127 103.1L94.8002 56.2998H57.7002L106.3 127.1L57.7002 183.6H68.7002L111.2 134.2L145.2 183.6H182.3L131.9 110.2ZM116.8 127.8L111.9 120.7L72.6002 64.5998H89.5002L121.2 109.9L126.1 117L167.2 175.8H150.3L116.8 127.8Z'
                fill='white'
              />
            </svg>
          </A>
          <A
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/jasmin-noetzli/'
          >
            <span class='sr-only'>Me on LinkedIn</span>
            <svg
              viewBox='0 0 72 72'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z'
                fill='black'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M59 57H49.9594V41.6018C49.9594 37.38 48.3552 35.0208 45.0137 35.0208C41.3785 35.0208 39.4793 37.4759 39.4793 41.6018V57H30.7667V27.6667H39.4793V31.6179C39.4793 31.6179 42.099 26.7705 48.3237 26.7705C54.5456 26.7705 59 30.5699 59 38.4279V57ZM20.3725 23.8257C17.4048 23.8257 15 21.402 15 18.4129C15 15.4237 17.4048 13 20.3725 13C23.3402 13 25.7436 15.4237 25.7436 18.4129C25.7436 21.402 23.3402 23.8257 20.3725 23.8257ZM15.8737 57H24.9587V27.6667H15.8737V57Z'
                fill='white'
              />
            </svg>
          </A>
        </div>
      </div>
    </div>
  )
}

export default Navbar
