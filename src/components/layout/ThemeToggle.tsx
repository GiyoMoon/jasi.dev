import { type VoidComponent, createEffect, createSignal } from 'solid-js'
import { Moon, Sun } from '~/components/icons'

type Theme = 'light' | 'dark' | 'system'

const systemIsDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches

const ThemeToggle: VoidComponent = () => {
  const [currentTheme, setCurrentTheme] = createSignal<Theme>('system')

  createEffect(() => {
    setCurrentTheme(getInitialTheme())

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', update)
    } else {
      mediaQuery.addListener(update)
    }

    function onStorage() {
      update()
      const theme = localStorage.theme
      if (theme === 'light' || theme === 'dark') {
        setCurrentTheme(theme)
      } else {
        setCurrentTheme('system')
      }
    }
    window.addEventListener('storage', onStorage)

    return () => {
      if (mediaQuery?.removeEventListener) {
        mediaQuery.removeEventListener('change', update)
      } else {
        mediaQuery.removeListener(update)
      }

      window.removeEventListener('storage', onStorage)
    }
  })

  createEffect(() => {
    const theme = currentTheme()
    if (theme) {
      updateTheme(theme)
    }
  })

  const updateTheme = (newTheme: Theme) => {
    if (newTheme === 'system') {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', newTheme)
    }
    update()
  }

  return (
    <>
      {currentTheme() === 'system' && (
        <>
          <button
            type='button'
            aria-label='Switch to dark theme'
            class='rounded px-2 py-1 outline-none dark:hidden'
            onClick={() => setCurrentTheme('dark')}
          >
            <Moon size='20' />
          </button>
          <button
            type='button'
            aria-label='Switch to light theme'
            class='hidden rounded px-2 py-1 outline-none dark:block'
            onClick={() => setCurrentTheme('light')}
          >
            <Sun size='20' />
          </button>
        </>
      )}
      {currentTheme() !== 'system' && (
        <>
          <button
            type='button'
            aria-label='Switch to dark theme'
            class='rounded px-2 py-1 outline-none dark:hidden'
            onClick={() => {
              if (systemIsDark()) {
                setCurrentTheme('dark')
              } else {
                setCurrentTheme('system')
              }
            }}
          >
            <Moon size='20' class='text-fuchsia-600' />
          </button>
          <button
            type='button'
            aria-label='Switch to light theme'
            class='hidden rounded px-2 py-1 outline-none dark:block'
            onClick={() => {
              if (systemIsDark()) {
                setCurrentTheme('system')
              } else {
                setCurrentTheme('light')
              }
            }}
          >
            <Sun size='20' class='text-fuchsia-400' />
          </button>
        </>
      )}
    </>
  )
}

export default ThemeToggle

function getInitialTheme(): Theme {
  if (localStorage.theme === 'dark') {
    return 'dark'
  } else if (localStorage.theme === 'light') {
    return 'light'
  } else {
    return 'system'
  }
}

function update() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && systemIsDark())
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
