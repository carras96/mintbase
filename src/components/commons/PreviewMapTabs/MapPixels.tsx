import { Flex, Stack, rem } from '@mantine/core'
import React, { ReactNode } from 'react'
const Pixel = ({ children, x, y }: { children?: ReactNode; x: number; y: number }) => {
  return (
    <Flex
      justify='center'
      align='center'
      sx={(theme) => ({
        width: rem(6),
        height: rem(6),
        border: '0.25px solid #979797',
        backgroundColor: '#3B3B3B'
      })}
    >
      {children}
    </Flex>
  )
}
const MapPixels = ({ length }: { length: number }) => {
    console.log('hihihi')
  return (
    <Flex align='center' justify='center' direction='column'>
      {Array.from(Array(length).keys()).map((y) => (
        <Flex align='center' justify='flex-start' key={`y${y}`}>
          {Array.from(Array(length).keys()).map((x) => (
            <Pixel x={x} y={y} key={`x${x}`}></Pixel>
          ))}
        </Flex>
      ))}
    </Flex>
  )
}

export default MapPixels
