import { Box, Flex, Stack, rem } from '@mantine/core'
import React, { ReactNode } from 'react'
const Pixel = ({ children, x, y }: { children?: ReactNode; x: number; y: number }) => {
  return (
    <Flex
      justify='center'
      align='center'
      sx={(theme) => ({
        width: '1%',
        aspectRatio: '1',
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
    <Flex align='center' justify='center' direction='column' w='100%'>
      {Array.from(Array(length).keys()).map((y) => (
        <Flex align='center' justify='flex-start' key={`y${y}`} w='100%'>
          {Array.from(Array(length).keys()).map((x) => (
            <Pixel x={x} y={y} key={`x${x}`}></Pixel>
          ))}
        </Flex>
      ))}
    </Flex>
  )

  // return (
  //   <Box
  //     sx={(theme) => ({
  //       width: '100%',
  //       aspectRatio: '1',
  //       display: 'grid',
  //       gridTemplateColumns: 'repeat(100, 1fr)',
  //       gridTemplateRows: 'repeat(100, 1fr)',
  //       border: '0.25px solid #979797'
  //     })}
  //   >
  //     {Array.from(Array(length * length).keys()).map((x) => (
  //       <Pixel key={`x${x}`}></Pixel>
  //     ))}
  //   </Box>
  // )
}

export default MapPixels
