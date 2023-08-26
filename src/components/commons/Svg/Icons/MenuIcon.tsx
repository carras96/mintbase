import React from 'react'

import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = ({ color, ...props }) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M11.9873 5.40892C8.47912 5.40892 4.9701 5.40975 1.4619 5.40809C0.574651 5.40725 -0.0285152 4.82735 0.00314267 4.01882C0.0298019 3.34714 0.567153 2.79644 1.23697 2.75389C1.31028 2.74888 1.38276 2.74805 1.45607 2.74805C8.48329 2.74805 15.5105 2.74805 22.5377 2.74888C23.3008 2.74888 23.8099 3.12686 23.9665 3.79604C24.1456 4.56285 23.5799 5.33883 22.7943 5.39974C22.6593 5.41059 22.5236 5.40809 22.3886 5.40809C18.9212 5.40892 15.4547 5.40892 11.9873 5.40892Z'
      fill='white'
    />
    <path
      d='M7.99536 13.4216C5.7993 13.4216 3.60325 13.425 1.40636 13.42C0.605747 13.4183 0.0225762 12.8734 0.00341481 12.1325C-0.0157465 11.4041 0.534934 10.805 1.26223 10.7658C1.33471 10.7616 1.40802 10.7616 1.4805 10.7616C5.83096 10.7616 10.1823 10.7608 14.5327 10.7616C15.2284 10.7616 15.7049 11.0628 15.914 11.6227C16.2389 12.4921 15.6232 13.4041 14.6777 13.4158C13.3564 13.4325 12.0342 13.4208 10.7121 13.4216C9.80653 13.4216 8.90094 13.4216 7.99536 13.4216Z'
      fill='white'
    />
    <path
      d='M4.67224 21.43C3.53756 21.43 2.40287 21.4416 1.26902 21.4249C0.614204 21.4149 0.0843512 20.901 0.00937204 20.2568C-0.0656071 19.6143 0.340947 19.0027 0.967439 18.8233C1.06658 18.7949 1.17155 18.7783 1.27485 18.7783C3.53339 18.7758 5.79193 18.7691 8.05047 18.7799C8.70362 18.7833 9.23848 19.2822 9.31595 19.9022C9.40093 20.5856 9.02603 21.1888 8.38205 21.3741C8.21543 21.4216 8.03298 21.43 7.85803 21.4308C6.79665 21.4358 5.73445 21.4333 4.67308 21.4333C4.67224 21.4333 4.67224 21.4316 4.67224 21.43Z'
      fill='white'
    />
  </Svg>
)

export default Icon
