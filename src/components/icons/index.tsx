import { JSX, createUniqueId } from 'solid-js'

export const Github = (
  props: Omit<
    JSX.SvgSVGAttributes<SVGSVGElement>,
    'xmlns' | 'viewBox' | 'width' | 'height'
  > & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 98 96'
      width={props.size}
      height={props.size}
      {...props}
    >
      <path
        fill='currentColor'
        fill-rule='evenodd'
        d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z'
        clip-rule='evenodd'
      />
    </svg>
  )
}

export const LinkedIn = (
  props: Omit<
    JSX.SvgSVGAttributes<SVGSVGElement>,
    'xmlns' | 'viewBox' | 'width' | 'height'
  > & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 72 72'
      width={props.size}
      height={props.size}
      {...props}
    >
      <path
        fill='#0e76a8'
        fill-rule='evenodd'
        d='M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36Z'
        clip-rule='evenodd'
      />
      <path
        fill='#fff'
        fill-rule='evenodd'
        d='M59 57h-9.04V41.602c0-4.222-1.605-6.581-4.946-6.581-3.636 0-5.535 2.455-5.535 6.58V57h-8.712V27.667h8.712v3.95s2.62-4.847 8.845-4.847C54.546 26.77 59 30.57 59 38.428V57ZM20.373 23.826c-2.968 0-5.373-2.424-5.373-5.413C15 15.423 17.405 13 20.372 13c2.968 0 5.372 2.424 5.372 5.413 0 2.989-2.404 5.413-5.372 5.413ZM15.873 57h9.086V27.667h-9.085V57Z'
        clip-rule='evenodd'
      />
    </svg>
  )
}

export const X = (
  props: Omit<
    JSX.SvgSVGAttributes<SVGSVGElement>,
    'xmlns' | 'viewBox' | 'width' | 'height'
  > & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 240 240'
      width={props.size}
      height={props.size}
      {...props}
    >
      <path d='M120 240c66.274 0 120-53.726 120-120S186.274 0 120 0 0 53.726 0 120s53.726 120 120 120Z' />
      <path
        fill='#D1D1D1'
        d='m133.9 112.2 46.4-53.9h-11L129 105.1 96.8 58.3H59.7l48.6 70.8-48.6 56.5h11l42.5-49.4 34 49.4h37.1l-50.4-73.4Zm-15.1 17.6-4.9-7.1-39.3-56.1h16.9l31.7 45.3 4.9 7.1 41.1 58.8h-16.9l-33.5-48Z'
        opacity='.15'
      />
      <path
        fill='#fff'
        d='m131.9 110.2 46.4-53.9h-11L127 103.1 94.8 56.3H57.7l48.6 70.8-48.6 56.5h11l42.5-49.4 34 49.4h37.1l-50.4-73.4Zm-15.1 17.6-4.9-7.1-39.3-56.1h16.9l31.7 45.3 4.9 7.1 41.1 58.8h-16.9l-33.5-48Z'
      />
    </svg>
  )
}

export const SolidJS = (
  props: Omit<
    JSX.SvgSVGAttributes<SVGSVGElement>,
    'xmlns' | 'viewBox' | 'width' | 'height'
  > & { size: string },
) => {
  const gradientId1 = createUniqueId()
  const gradientId2 = createUniqueId()
  const gradientId3 = createUniqueId()
  const gradientId4 = createUniqueId()

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 166 155.3'
      width={props.size}
      height={props.size}
      {...props}
    >
      <path
        fill='#76b3e1'
        d='M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z'
      />
      <linearGradient
        id={gradientId1}
        x1='27.5'
        x2='152'
        y1='3'
        y2='63.5'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='.1' stop-color='#76b3e1' />
        <stop offset='.3' stop-color='#dcf2fd' />
        <stop offset='1' stop-color='#76b3e1' />
      </linearGradient>
      <path
        fill={`url(#${gradientId1})`}
        d='M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z'
        opacity='.3'
      />
      <path
        fill='#518ac8'
        d='m52 35-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z'
      />
      <linearGradient
        id={gradientId2}
        x1='95.8'
        x2='74'
        y1='32.6'
        y2='105.2'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stop-color='#76b3e1' />
        <stop offset='.5' stop-color='#4377bb' />
        <stop offset='1' stop-color='#1f3b77' />
      </linearGradient>
      <path
        fill={`url(#${gradientId2})`}
        d='m52 35-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z'
        opacity='.3'
      />
      <linearGradient
        id={gradientId3}
        x1='18.4'
        x2='144.3'
        y1='64.2'
        y2='149.8'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stop-color='#315aa9' />
        <stop offset='.5' stop-color='#518ac8' />
        <stop offset='1' stop-color='#315aa9' />
      </linearGradient>
      <path
        fill={`url(#${gradientId3})`}
        d='M134 80a45 45 0 0 0-48-15L24 85 4 120l112 19 20-36c4-7 3-15-2-23z'
      />
      <linearGradient
        id={gradientId4}
        x1='75.2'
        x2='24.4'
        y1='74.5'
        y2='260.8'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stop-color='#4377bb' />
        <stop offset='.5' stop-color='#1a336b' />
        <stop offset='1' stop-color='#1a336b' />
      </linearGradient>
      <path
        fill={`url(#${gradientId4})`}
        d='M114 115a45 45 0 0 0-48-15L4 120s53 40 94 30l3-1c17-5 23-21 13-34z'
      />
    </svg>
  )
}

export const Rust = (
  props: Omit<
    JSX.SvgSVGAttributes<SVGSVGElement>,
    'xmlns' | 'viewBox' | 'width' | 'height'
  > & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 105 105'
      width={props.size}
      height={props.size}
      {...props}
    >
      <path
        fill='currentColor'
        d='M52.75 5.48C26.69 5.48 5.48 26.7 5.48 52.75c0 26.05 21.22 47.27 47.27 47.27 26.05 0 47.27-21.22 47.27-47.27 0-26.05-21.22-47.27-47.27-47.27Zm-.07 4.2c.808.021 1.576.358 2.14.939a3.115 3.115 0 0 1-.03 4.37 3.11 3.11 0 1 1-2.11-5.309Zm7.12 5.12A38.27 38.27 0 0 1 86 33.46l-3.67 8.28a2.86 2.86 0 0 0 1.44 3.75l7.06 3.13c.219 2.207.246 4.429.08 6.64h-3.93c-.39 0-.55.26-.55.64v1.8c0 4.24-2.39 5.17-4.49 5.4-2 .23-4.21-.84-4.49-2.06-1.18-6.63-3.14-8.04-6.24-10.49 3.85-2.44 7.85-6.05 7.85-10.87 0-5.21-3.57-8.49-6-10.1-3.42-2.25-7.2-2.7-8.22-2.7h-40.6A38.27 38.27 0 0 1 45.65 14.8l4.79 5.02a2.82 2.82 0 0 0 4 .09l5.36-5.11ZM15.6 37.82a3.11 3.11 0 1 1-.18 6.217 3.11 3.11 0 0 1 .18-6.217Zm74.15.14a3.11 3.11 0 1 1-.18 6.217 3.11 3.11 0 0 1 .18-6.217Zm-68.29.5h5.42V62.9H15.94a38.27 38.27 0 0 1-1.24-14.61l6.7-2.98a2.832 2.832 0 0 0 1.44-3.74l-1.38-3.11Zm22.62.26h12.91c.67 0 4.71.77 4.71 3.8 0 2.51-3.1 3.41-5.65 3.41H44.07l.01-7.21Zm0 17.56h9.89c.9 0 4.83.26 6.08 5.28.39 1.54 1.26 6.56 1.85 8.17.59 1.8 2.98 5.4 5.53 5.4h16.14a38.272 38.272 0 0 1-3.54 4.1l-6.57-1.41A2.84 2.84 0 0 0 70.09 80l-1.56 7.28a38.27 38.27 0 0 1-31.91-.15l-1.56-7.28a2.83 2.83 0 0 0-3.36-2.18l-6.43 1.38a38.26 38.26 0 0 1-3.32-3.92h31.27c.35 0 .59-.06.59-.39V63.68c0-.32-.24-.39-.59-.39h-9.15l.01-7.01ZM29.65 81.61a3.11 3.11 0 1 1-.18 6.217 3.11 3.11 0 0 1 .18-6.217Zm46.05.14a3.11 3.11 0 1 1-.18 6.217 3.11 3.11 0 0 1 .18-6.217Z'
      />
      <path
        fill='currentColor'
        fill-rule='evenodd'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='3'
        d='M97.38 52.75a44.63 44.63 0 1 1-89.26 0 44.63 44.63 0 0 1 89.26 0Zm-.84-4.31 6.96 4.31-6.96 4.31 5.98 5.59-7.66 2.87 4.78 6.65-8.09 1.32 3.4 7.46-8.19-.29 1.88 7.98-7.98-1.88.29 8.19-7.46-3.4-1.32 8.09-6.65-4.78-2.87 7.66-5.59-5.98-4.31 6.96-4.31-6.96-5.59 5.98-2.87-7.66-6.65 4.78-1.32-8.09-7.46 3.4.29-8.19-7.98 1.88 1.88-7.98-8.19.29 3.4-7.46-8.09-1.32 4.78-6.65-7.66-2.87 5.98-5.59L2 52.75l6.96-4.31-5.98-5.59 7.66-2.87-4.78-6.65 8.09-1.32-3.4-7.46 8.19.29-1.88-7.98 7.98 1.88-.29-8.19 7.46 3.4 1.32-8.09 6.65 4.78 2.87-7.66 5.59 5.98L52.75 2l4.31 6.96 5.59-5.98 2.87 7.66 6.65-4.78 1.32 8.09 7.46-3.4-.29 8.19 7.98-1.88-1.88 7.98 8.19-.29-3.4 7.46 8.09 1.32-4.78 6.65 7.66 2.87-5.98 5.59Z'
        clip-rule='evenodd'
      />
    </svg>
  )
}

export const React = (
  props: Omit<
    JSX.SvgSVGAttributes<SVGSVGElement>,
    'xmlns' | 'viewBox' | 'width' | 'height'
  > & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='-10.5 -9.45 21 18.9'
      width={props.size}
      height={props.size}
      {...props}
    >
      <circle r='2' fill='#2393c0' />
      <g fill='none' stroke='#2393c0'>
        <ellipse rx='10' ry='4.5' />
        <ellipse rx='10' ry='4.5' transform='rotate(60)' />
        <ellipse rx='10' ry='4.5' transform='rotate(120)' />
      </g>
    </svg>
  )
}

export const NextJS = (
  props: Omit<
    JSX.SvgSVGAttributes<SVGSVGElement>,
    'xmlns' | 'viewBox' | 'width' | 'height'
  > & { size: string },
) => {
  const gradientId1 = createUniqueId()
  const gradientId2 = createUniqueId()
  const gradientId3 = createUniqueId()

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 180 180'
      width={props.size}
      height={props.size}
      {...props}
    >
      <mask
        id={gradientId1}
        width='180'
        height='180'
        x='0'
        y='0'
        maskUnits='userSpaceOnUse'
        style={{ 'mask-type': 'alpha' }}
      >
        <circle cx='90' cy='90' r='90' fill='#000' />
      </mask>
      <g mask={`url(#${gradientId1})`}>
        <circle
          cx='90'
          cy='90'
          r='87'
          fill='#000'
          stroke='#fff'
          stroke-width='6'
        />
        <path
          fill={`url(#${gradientId2})`}
          d='M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 0 0 9.509-7.325z'
        />
        <path fill={`url(#${gradientId3})`} d='M115 54h12v72h-12z' />
      </g>
      <defs>
        <linearGradient
          id={gradientId2}
          x1='109'
          x2='144.5'
          y1='116.5'
          y2='160.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#fff' />
          <stop offset='1' stop-color='#fff' stop-opacity='0' />
        </linearGradient>
        <linearGradient
          id={gradientId3}
          x1='121'
          x2='120.799'
          y1='54'
          y2='106.875'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#fff' />
          <stop offset='1' stop-color='#fff' stop-opacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const Moon = (
  props: Omit<
    JSX.SvgSVGAttributes<SVGSVGElement>,
    'xmlns' | 'viewBox' | 'width' | 'height'
  > & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      width={props.size}
      height={props.size}
      {...props}
    >
      <path fill='none' d='M0 0h256v256H0z' />
      <path
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
        d='M108.11 28.11a96.09 96.09 0 0 0 119.78 119.78A96 96 0 1 1 108.11 28.11Z'
      />
    </svg>
  )
}

export const Sun = (
  props: Omit<
    JSX.SvgSVGAttributes<SVGSVGElement>,
    'xmlns' | 'viewBox' | 'width' | 'height'
  > & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      width={props.size}
      height={props.size}
      {...props}
    >
      <path fill='none' d='M0 0h256v256H0z' />
      <path
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
        d='M128 40V16'
      />
      <circle
        cx='128'
        cy='128'
        r='56'
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      />
      <path
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
        d='M64 64 48 48M64 192l-16 16M192 64l16-16M192 192l16 16M40 128H16M128 216v24M216 128h24'
      />
    </svg>
  )
}
