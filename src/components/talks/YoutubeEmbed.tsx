import type { VoidComponent } from 'solid-js'

const YoutubeEmbed: VoidComponent<{ id: string; title: string }> = (props) => {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${props.id}`}
      title={props.title}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowfullscreen
      class='aspect-video w-full rounded-xl'
    />
  )
}

export default YoutubeEmbed
