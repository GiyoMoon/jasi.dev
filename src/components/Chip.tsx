import { A } from '@solidjs/router'
import type { JSX, VoidComponent } from 'solid-js'
import {
  Github,
  LinkedIn,
  NextJS,
  React,
  Rust,
  SolidJS,
  X,
} from '~/components/icons'

type Chip = {
  icon: (
    props: Omit<JSX.SvgSVGAttributes<SVGSVGElement>, 'style'> & {
      size: string
    },
  ) => JSX.Element
  text: string
  href: string
}

const chips: { [key: string]: Chip } = {
  github: {
    icon: Github,
    text: 'Github',
    href: 'https://github.com/GiyoMoon',
  },
  x: {
    icon: X,
    text: 'X',
    href: 'https://x.com/giyo_moon',
  },
  linkedin: {
    icon: LinkedIn,
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jasmin-noetzli/',
  },
  rust: {
    icon: Rust,
    text: 'Rust',
    href: 'https://www.rust-lang.org/',
  },
  solidjs: {
    icon: SolidJS,
    text: 'SolidJS',
    href: 'https://solidjs.com',
  },
  react: {
    icon: React,
    text: 'React',
    href: 'https://react.dev',
  },
  nextjs: {
    icon: NextJS,
    text: 'NextJS',
    href: 'https://nextjs.org/',
  },
}

const Chip: VoidComponent<{
  type: keyof typeof chips
}> = (props) => {
  // eslint-disable-next-line solid/reactivity
  const chip = chips[props.type]

  return (
    <>
      <A
        target='_blank'
        rel='noopener noreferrer'
        href={chip.href}
        class='inline-flex items-center rounded border border-neutral-200 bg-neutral-50 px-1 py-0.5 text-sm text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200'
      >
        <chip.icon class='mr-1' size='16' />
        {chip.text}
      </A>
    </>
  )
}

export default Chip
