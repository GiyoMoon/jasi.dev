import { A } from '@solidjs/router'
import { For, type VoidComponent } from 'solid-js'

const Talk: VoidComponent<{
  title: string
  tags: string[]
  href: string
}> = (props) => {
  return (
    <A
      href={props.href}
      class='not-prose mb-2 block border-l-2 border-fuchsia-400 pl-2'
    >
      <h3 class='text-lg font-bold'>{props.title}</h3>
      <div class='space-x-1.5'>
        <For each={props.tags}>
          {(tag) => (
            <span class='rounded bg-fuchsia-100 px-1 py-0.5 text-xs text-fuchsia-800 dark:bg-fuchsia-200'>
              {tag}
            </span>
          )}
        </For>
      </div>
    </A>
  )
}

export default Talk
