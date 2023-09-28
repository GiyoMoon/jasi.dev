import { A } from '@solidjs/router'
import { For, type VoidComponent } from 'solid-js'

const Talk: VoidComponent<{
  title: string
  tags: string[]
  link: string
}> = (props) => {
  return (
    <A
      href={props.link}
      class='not-prose mb-2 block border-l-2 border-purple-400 pl-2'
    >
      <h3 class='text-lg font-bold'>{props.title}</h3>
      <div class='space-x-1.5'>
        <For each={props.tags}>
          {(tag) => (
            <span class='rounded bg-purple-100 px-1 py-0.5 text-xs text-purple-800'>
              {tag}
            </span>
          )}
        </For>
      </div>
    </A>
  )
}

export default Talk
