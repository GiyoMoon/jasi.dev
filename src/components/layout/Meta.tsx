import { Head, Meta, Title } from 'solid-start'
import type { VoidComponent } from 'solid-js'

const MetaComponent: VoidComponent<{
  title: string
  description: string
  path: string
  image?: string
}> = (props) => {
  return (
    <Head>
      <Title>{props.title}</Title>
      <Meta name='description' content={props.description} />

      <Meta name='og:type' content='website' />
      <Meta name='og:locale' content='en_US' />
      <Meta name='og:title' content={props.title} />
      <Meta name='og:site_name' content={props.title} />
      <Meta name='og:description' content={props.description} />
      <Meta name='og:url' content={`https://jasi.dev${props.path}`} />
      {props.image && (
        <Meta name='og:image' content={`https://jasi.dev${props.image}`} />
      )}

      <Meta name='twitter:card' content='summary' />
      <Meta name='twitter:title' content={props.title} />
      <Meta name='twitter:description' content={props.description} />
      <Meta name='twitter:url' content={`https://jasi.dev${props.path}`} />
      {props.image && (
        <Meta name='twitter:image' content={`https://jasi.dev${props.image}`} />
      )}
    </Head>
  )
}

export default MetaComponent
