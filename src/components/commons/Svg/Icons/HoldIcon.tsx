import React from 'react'

import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = ({ color, ...props }) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
    <mask
      id='mask0_512_83511'
      style={{ maskType: 'luminance' }}
      maskUnits='userSpaceOnUse'
      x='2'
      y='4'
      width='22'
      height='19'
    >
      <path
        d='M10.5 17L13.5 18C13.5 18 21 16.5 22 16.5C23 16.5 23 17.5 22 18.5C21 19.5 17.5 22.5 14.5 22.5C11.5 22.5 9.5 21 7.5 21H2.5'
        stroke='white'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M2.5 15C3.5 14 5.5 12.5 7.5 12.5C9.5 12.5 14.25 14.5 15 15.5C15.75 16.5 13.5 18 13.5 18'
        stroke='white'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M20 8H15C14.1716 8 13.5 8.67157 13.5 9.5C13.5 10.3284 14.1716 11 15 11H20C20.8284 11 21.5 10.3284 21.5 9.5C21.5 8.67157 20.8284 8 20 8Z'
        fill='white'
        stroke='white'
      />
      <path d='M13.5 5H21.5' stroke='white' stroke-linecap='round' />
    </mask>
    <g mask='url(#mask0_512_83511)'>
      <path d='M0.5 0.5H24.5V24.5H0.5V0.5Z' fill='white' />
    </g>
  </Svg>
)

export default Icon
