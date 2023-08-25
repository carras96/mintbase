import React from 'react'

import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = ({ color, ...props }) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
    <path
      d='M18.7048 2.75H22.0128L14.7858 11.01L23.2878 22.25H16.6298L11.4158 15.433L5.44984 22.25H2.13984L9.86984 13.415L1.71484 2.75H8.53984L13.2528 8.981L18.7028 2.75H18.7048ZM17.5438 20.27H19.3768L7.54484 4.626H5.57784L17.5438 20.27Z'
      fill='white'
    />
  </Svg>
)

export default Icon
