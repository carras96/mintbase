import React from 'react'

import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = ({ color, ...props }) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width='131' height='2' viewBox='0 0 131 2' fill='none'>
    <path d='M0.5 1H131' stroke='white' stroke-opacity='0.32' />
  </Svg>
)

export default Icon
