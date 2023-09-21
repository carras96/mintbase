import React from 'react'

import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = ({ color, ...props }) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 17 17' fill='none' {...props}>
    <path d='M13.5 6L8.5 11L3.5 6' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
    <path
      d='M13.5 6L8.5 11L3.5 6'
      stroke='black'
      stroke-opacity='0.2'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M13.5 6L8.5 11L3.5 6'
      stroke='black'
      stroke-opacity='0.2'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Svg>
)

export default Icon
