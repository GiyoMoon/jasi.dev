import { A } from '@solidjs/router'
import type { VoidComponent } from 'solid-js'
import ThemeToggle from '~/components/layout/ThemeToggle'

const Navbar: VoidComponent = () => {
  return (
    <div class='mb-5 rounded-b border-b-4 border-fuchsia-500 pb-2 md:flex md:items-center md:justify-between'>
      <A href='/' class='text-2xl font-extrabold'>
        Jasmin
      </A>
      <div class='-mx-2 mt-1 flex justify-between md:mx-0 md:-mr-2 md:mt-0 md:justify-normal md:space-x-3'>
        <div class='flex items-center space-x-2'>
          <A
            href='/'
            class='rounded-t px-2 py-1 font-mono text-sm'
            activeClass='text-fuchsia-600 dark:text-fuchsia-500'
            end
          >
            /
          </A>
          <A
            href='/projects'
            class='rounded-t px-2 py-1 font-mono text-sm'
            activeClass='text-fuchsia-600 dark:text-fuchsia-500'
          >
            /projects
          </A>
          <A
            href='/blog'
            class='rounded-t px-2 py-1 font-mono text-sm'
            activeClass='text-fuchsia-600 dark:text-fuchsia-500'
          >
            /blog
          </A>
          <A
            href='/talks'
            class='rounded-t px-2 py-1 font-mono text-sm'
            activeClass='text-fuchsia-600 dark:text-fuchsia-500'
          >
            /talks
          </A>
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar
