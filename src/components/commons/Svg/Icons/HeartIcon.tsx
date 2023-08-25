import React from 'react'

import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = ({ color, ...props }) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
    <g clip-path='url(#clip0_512_83533)'>
      <mask
        id='mask0_512_83533'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='2'
        width='25'
        height='22'
      >
        <path
          d='M8.02788 4C4.97498 4 2.5 6.47498 2.5 9.52788C2.5 15.0558 9.03295 20.0811 12.5507 21.25C16.0684 20.0811 22.6014 15.0558 22.6014 9.52788C22.6014 6.47498 20.1264 4 17.0735 4C15.2041 4 13.5507 4.92818 12.5507 6.34885C12.041 5.62279 11.3638 5.03024 10.5765 4.62138C9.78921 4.21252 8.915 3.99937 8.02788 4Z'
          fill='white'
          stroke='white'
          stroke-width='4'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </mask>
      <g mask='url(#mask0_512_83533)'>
        <path d='M-2.52539 -6.67883H27.6267V23.4732H-2.52539V-6.67883Z' fill='white' />
      </g>
    </g>
    <defs>
      <clipPath id='clip0_512_83533'>
        <rect width='24' height='24' fill='white' transform='translate(0.5 0.5)' />
      </clipPath>
    </defs>
  </Svg>
)

export default Icon
