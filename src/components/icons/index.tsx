import { JSX } from 'solid-js'

export const Github = (
  props: Omit<JSX.SvgSVGAttributes<SVGSVGElement>, 'style'> & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 98 96'
      style={{
        height: props.size,
        width: props.size,
      }}
      fill='currentColor'
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z'
        fill='currentColor'
      />
    </svg>
  )
}

export const LinkedIn = (
  props: Omit<JSX.SvgSVGAttributes<SVGSVGElement>, 'style'> & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 72 72'
      style={{
        height: props.size,
        width: props.size,
      }}
      fill='currentColor'
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z'
        fill='#0e76a8'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M59 57H49.9594V41.6018C49.9594 37.38 48.3552 35.0208 45.0137 35.0208C41.3785 35.0208 39.4793 37.4759 39.4793 41.6018V57H30.7667V27.6667H39.4793V31.6179C39.4793 31.6179 42.099 26.7705 48.3237 26.7705C54.5456 26.7705 59 30.5699 59 38.4279V57ZM20.3725 23.8257C17.4048 23.8257 15 21.402 15 18.4129C15 15.4237 17.4048 13 20.3725 13C23.3402 13 25.7436 15.4237 25.7436 18.4129C25.7436 21.402 23.3402 23.8257 20.3725 23.8257ZM15.8737 57H24.9587V27.6667H15.8737V57Z'
        fill='white'
      />
    </svg>
  )
}

export const X = (
  props: Omit<JSX.SvgSVGAttributes<SVGSVGElement>, 'style'> & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 240 240'
      style={{
        height: props.size,
        width: props.size,
      }}
      fill='currentColor'
      {...props}
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
  )
}

export const SolidJS = (
  props: Omit<JSX.SvgSVGAttributes<SVGSVGElement>, 'style'> & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 166 155.3'
      style={{
        height: props.size,
        width: props.size,
      }}
      fill='currentColor'
      {...props}
    >
      <path
        fill='#76b3e1'
        d='M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z'
      />
      <linearGradient
        id='a'
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
        fill='url(#a)'
        d='M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z'
        opacity='.3'
      />
      <path
        fill='#518ac8'
        d='m52 35-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z'
      />
      <linearGradient
        id='b'
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
        fill='url(#b)'
        d='m52 35-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z'
        opacity='.3'
      />
      <linearGradient
        id='c'
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
        fill='url(#c)'
        d='M134 80a45 45 0 0 0-48-15L24 85 4 120l112 19 20-36c4-7 3-15-2-23z'
      />
      <linearGradient
        id='d'
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
        fill='url(#d)'
        d='M114 115a45 45 0 0 0-48-15L4 120s53 40 94 30l3-1c17-5 23-21 13-34z'
      />
    </svg>
  )
}

export const Rust = (
  props: Omit<JSX.SvgSVGAttributes<SVGSVGElement>, 'style'> & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 105 105'
      style={{
        height: props.size,
        width: props.size,
      }}
      fill='currentColor'
      {...props}
    >
      <path
        d='M52.75 5.4801C26.69 5.4801 5.47998 26.7001 5.47998 52.7501C5.47998 78.8001 26.7 100.02 52.75 100.02C78.8 100.02 100.02 78.8001 100.02 52.7501C100.02 26.7001 78.8 5.4801 52.75 5.4801ZM52.68 9.6801C53.4882 9.70103 54.2563 10.0379 54.8205 10.6189C55.3847 11.1999 55.7003 11.979 55.7 12.7901C55.7 13.6149 55.3723 14.406 54.7891 14.9892C54.2058 15.5724 53.4148 15.9001 52.59 15.9001C51.7652 15.9001 50.9741 15.5724 50.3909 14.9892C49.8076 14.406 49.48 13.6149 49.48 12.7901C49.4798 12.374 49.5631 11.9621 49.725 11.5788C49.8869 11.1955 50.1241 10.8486 50.4225 10.5586C50.7209 10.2686 51.0744 10.0414 51.4622 9.8905C51.85 9.73961 52.2641 9.66806 52.68 9.6801ZM59.8 14.8001C65.2596 15.8227 70.4312 18.0215 74.9556 21.2439C79.48 24.4662 83.2487 28.6348 86 33.4601L82.33 41.7401C81.7 43.1701 82.35 44.8501 83.77 45.4901L90.83 48.6201C91.049 50.8269 91.0758 53.0486 90.91 55.2601H86.98C86.59 55.2601 86.43 55.5201 86.43 55.9001V57.7001C86.43 61.9401 84.04 62.8701 81.94 63.1001C79.94 63.3301 77.73 62.2601 77.45 61.0401C76.27 54.4101 74.31 53.0001 71.21 50.5501C75.06 48.1101 79.06 44.5001 79.06 39.6801C79.06 34.4701 75.49 31.1901 73.06 29.5801C69.64 27.3301 65.86 26.8801 64.84 26.8801H24.24C29.854 20.6085 37.379 16.3627 45.65 14.8001L50.44 19.8201C51.52 20.9501 53.31 21.0001 54.44 19.9101L59.8 14.8001ZM15.6 37.8201C16.4091 37.8435 17.1772 38.1815 17.7411 38.7622C18.305 39.3429 18.6203 40.1206 18.62 40.9301C18.62 41.7549 18.2923 42.546 17.7091 43.1292C17.1258 43.7124 16.3348 44.0401 15.51 44.0401C14.6852 44.0401 13.8941 43.7124 13.3109 43.1292C12.7276 42.546 12.4 41.7549 12.4 40.9301C12.3998 40.514 12.4831 40.1021 12.645 39.7188C12.8069 39.3355 13.0441 38.9886 13.3425 38.6986C13.6409 38.4086 13.9944 38.1814 14.3822 38.0305C14.7699 37.8796 15.1841 37.8081 15.6 37.8201ZM89.75 37.9601C90.5591 37.9835 91.3272 38.3215 91.8911 38.9022C92.455 39.4829 92.7703 40.2606 92.77 41.0701C92.77 41.8949 92.4423 42.686 91.8591 43.2692C91.2758 43.8524 90.4848 44.1801 89.66 44.1801C88.8352 44.1801 88.0441 43.8524 87.4609 43.2692C86.8776 42.686 86.55 41.8949 86.55 41.0701C86.5498 40.654 86.6331 40.2421 86.795 39.8588C86.9569 39.4755 87.1941 39.1286 87.4925 38.8386C87.7909 38.5486 88.1444 38.3214 88.5322 38.1705C88.92 38.0196 89.3341 37.9481 89.75 37.9601ZM21.46 38.4601H26.88V62.9001H15.94C14.5889 58.1555 14.1678 53.1945 14.7 48.2901L21.4 45.3101C22.83 44.6701 23.48 43.0001 22.84 41.5701L21.46 38.4601ZM44.08 38.7201H56.99C57.66 38.7201 61.7 39.4901 61.7 42.5201C61.7 45.0301 58.6 45.9301 56.05 45.9301H44.07L44.08 38.7201ZM44.08 56.2801H53.97C54.87 56.2801 58.8 56.5401 60.05 61.5601C60.44 63.1001 61.31 68.1201 61.9 69.7301C62.49 71.5301 64.88 75.1301 67.43 75.1301H83.57C82.4883 76.5787 81.3053 77.9488 80.03 79.2301L73.46 77.8201C71.93 77.4901 70.42 78.4701 70.09 80.0001L68.53 87.2801C63.5135 89.5525 58.0657 90.7155 52.5586 90.6896C47.0515 90.6638 41.6149 89.4496 36.62 87.1301L35.06 79.8501C34.73 78.3201 33.23 77.3401 31.7 77.6701L25.27 79.0501C24.0768 77.8193 22.9676 76.5097 21.95 75.1301H53.22C53.57 75.1301 53.81 75.0701 53.81 74.7401V63.6801C53.81 63.3601 53.57 63.2901 53.22 63.2901H44.07L44.08 56.2801ZM29.65 81.6101C30.4591 81.6335 31.2272 81.9715 31.7911 82.5522C32.355 83.1329 32.6703 83.9106 32.67 84.7201C32.67 85.5449 32.3423 86.336 31.7591 86.9192C31.1758 87.5024 30.3848 87.8301 29.56 87.8301C28.7352 87.8301 27.9441 87.5024 27.3609 86.9192C26.7776 86.336 26.45 85.5449 26.45 84.7201C26.4498 84.304 26.5331 83.8921 26.695 83.5088C26.8569 83.1255 27.0941 82.7786 27.3925 82.4886C27.6909 82.1986 28.0444 81.9714 28.4322 81.8205C28.8199 81.6696 29.2341 81.5981 29.65 81.6101ZM75.7 81.7501C76.5091 81.7735 77.2772 82.1115 77.8411 82.6922C78.405 83.2729 78.7203 84.0506 78.72 84.8601C78.72 85.6849 78.3923 86.476 77.8091 87.0592C77.2258 87.6424 76.4348 87.9701 75.61 87.9701C74.7852 87.9701 73.9941 87.6424 73.4109 87.0592C72.8276 86.476 72.5 85.6849 72.5 84.8601C72.4998 84.444 72.5831 84.0321 72.745 83.6488C72.9069 83.2655 73.1441 82.9186 73.4425 82.6286C73.7409 82.3386 74.0944 82.1114 74.4822 81.9605C74.87 81.8096 75.2841 81.7381 75.7 81.7501Z'
        fill='currentColor'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M97.38 52.75C97.38 64.5866 92.6779 75.9384 84.3082 84.3082C75.9384 92.6779 64.5866 97.38 52.75 97.38C40.9134 97.38 29.5616 92.6779 21.1918 84.3082C12.8221 75.9384 8.12 64.5866 8.12 52.75C8.12 40.9134 12.8221 29.5616 21.1918 21.1918C29.5616 12.8221 40.9134 8.12 52.75 8.12C64.5866 8.12 75.9384 12.8221 84.3082 21.1918C92.6779 29.5616 97.38 40.9134 97.38 52.75ZM96.54 48.44L103.5 52.75L96.54 57.06L102.52 62.65L94.86 65.52L99.64 72.17L91.55 73.49L94.95 80.95L86.76 80.66L88.64 88.64L80.66 86.76L80.95 94.95L73.49 91.55L72.17 99.64L65.52 94.86L62.65 102.52L57.06 96.54L52.75 103.5L48.44 96.54L42.85 102.52L39.98 94.86L33.33 99.64L32.01 91.55L24.55 94.95L24.84 86.76L16.86 88.64L18.74 80.66L10.55 80.95L13.95 73.49L5.86 72.17L10.64 65.52L2.98 62.65L8.96 57.06L2 52.75L8.96 48.44L2.98 42.85L10.64 39.98L5.86 33.33L13.95 32.01L10.55 24.55L18.74 24.84L16.86 16.86L24.84 18.74L24.55 10.55L32.01 13.95L33.33 5.86L39.98 10.64L42.85 2.98L48.44 8.96L52.75 2L57.06 8.96L62.65 2.98L65.52 10.64L72.17 5.86L73.49 13.95L80.95 10.55L80.66 18.74L88.64 16.86L86.76 24.84L94.95 24.55L91.55 32.01L99.64 33.33L94.86 39.98L102.52 42.85L96.54 48.44Z'
        fill='currentColor'
        stroke='currentColor'
        stroke-width='3'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export const React = (
  props: Omit<JSX.SvgSVGAttributes<SVGSVGElement>, 'style'> & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='-10.5 -9.45 21 18.9'
      style={{
        height: props.size,
        width: props.size,
      }}
      fill='none'
      {...props}
    >
      <circle cx='0' cy='0' r='2' fill='#2393c0' />
      <g stroke='#2393c0' stroke-width='1' fill='none'>
        <ellipse rx='10' ry='4.5' />
        <ellipse rx='10' ry='4.5' transform='rotate(60)' />
        <ellipse rx='10' ry='4.5' transform='rotate(120)' />
      </g>
    </svg>
  )
}

export const NextJS = (
  props: Omit<JSX.SvgSVGAttributes<SVGSVGElement>, 'style'> & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 180 180'
      style={{
        height: props.size,
        width: props.size,
      }}
      fill='none'
      {...props}
    >
      <mask
        id='a'
        style={{ 'mask-type': 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='180'
        height='180'
      >
        <circle cx='90' cy='90' r='90' fill='#000' />
      </mask>
      <g mask='url(#a)'>
        <circle
          cx='90'
          cy='90'
          r='87'
          fill='#000'
          stroke='#fff'
          stroke-width='6'
        />
        <path
          d='M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z'
          fill='url(#paint0_linear_408_139)'
        />
        <path fill='url(#paint1_linear_408_139)' d='M115 54H127V126H115z' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_408_139'
          x1='109'
          y1='116.5'
          x2='144.5'
          y2='160.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#fff' />
          <stop offset='1' stop-color='#fff' stop-opacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_408_139'
          x1='121'
          y1='54'
          x2='120.799'
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
  props: Omit<JSX.SvgSVGAttributes<SVGSVGElement>, 'style'> & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      style={{
        height: props.size,
        width: props.size,
      }}
      {...props}
    >
      <rect width='256' height='256' fill='none' />
      <path
        d='M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z'
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      />
    </svg>
  )
}

export const Sun = (
  props: Omit<JSX.SvgSVGAttributes<SVGSVGElement>, 'style'> & { size: string },
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      style={{
        height: props.size,
        width: props.size,
      }}
      {...props}
    >
      <rect width='256' height='256' fill='none' />
      <line
        x1='128'
        y1='40'
        x2='128'
        y2='16'
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
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
      <line
        x1='64'
        y1='64'
        x2='48'
        y2='48'
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      />
      <line
        x1='64'
        y1='192'
        x2='48'
        y2='208'
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      />
      <line
        x1='192'
        y1='64'
        x2='208'
        y2='48'
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      />
      <line
        x1='192'
        y1='192'
        x2='208'
        y2='208'
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      />
      <line
        x1='40'
        y1='128'
        x2='16'
        y2='128'
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      />
      <line
        x1='128'
        y1='216'
        x2='128'
        y2='240'
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      />
      <line
        x1='216'
        y1='128'
        x2='240'
        y2='128'
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      />
    </svg>
  )
}
