import React from 'react'

import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = ({ color, ...props }) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width='131' height='113' viewBox='0 0 131 113' fill='none'>
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M1 0.5V0.787986H131V1.78799H1V110.818H0V0.5H1ZM0.5 112.106H131V111.106H0.5V112.106Z'
      fill='white'
      fill-opacity='0.32'
    />
  </Svg>
)

export default Icon
