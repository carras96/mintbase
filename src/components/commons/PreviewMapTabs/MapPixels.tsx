import { Box, Flex, Stack, rem } from '@mantine/core'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import 'svg-pan-zoom-container'
import Svg from '../Svg/Svg'
import { get } from 'lodash'

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
  const strokeWidth = 0.1
  const [pixels, setPixels] = useState(Array(length * length).fill(false))

  // const togglePixel = (index: number) => {
  //   const newPixels = [...pixels]
  //   newPixels[index] = !newPixels[index]
  //   setPixels(newPixels)
  // }

  const [pixelSize, setPixelSize] = useState(5)
  const [eleclientSize, setEleclientSize] = useState(100)

  const ref = useRef(null)

  useEffect(() => {
    const eleclientWidth = get(ref, 'current.clientWidth', 0)
    if (eleclientWidth) {
      setPixelSize((eleclientWidth - (length + 1) * strokeWidth) / length)
      setEleclientSize(eleclientWidth)
    }
  }, [ref])

  const images = [
    {
      url: 'https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw4f85258b/productimages/singlepackshot/760268C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5',
      posX: Math.floor(Math.random() * length),
      posY: Math.floor(Math.random() * length)
    },
    {
      url: 'https://flxt.tmsimg.com/assets/p170620_p_v8_az.jpg',
      posX: Math.floor(Math.random() * length),
      posY: Math.floor(Math.random() * length)
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNGlEMBmyMD6uXamHaxzdyoPcwTPybEkobg&usqp=CAU',
      posX: Math.floor(Math.random() * length),
      posY: Math.floor(Math.random() * length)
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuwQGnO6uYyDw27xlvj4aNOOZF1QZodu5sg&usqp=CAU',
      posX: Math.floor(Math.random() * length),
      posY: Math.floor(Math.random() * length)
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGpQrwXnqWajlwZWM72TbH36OT8m_H7sjrQ&usqp=CAU',
      posX: Math.floor(Math.random() * length),
      posY: Math.floor(Math.random() * length)
    },
    {
      url: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/10/nguoi-sat-696x391.jpg?fit=700%2C20000&quality=95&ssl=1',
      posX: Math.floor(Math.random() * length),
      posY: Math.floor(Math.random() * length)
    }
  ]

  console.log(images)

  // console.log(ref?.current?.clientWidth, '========')

  // return (
  //   <Flex align='center' justify='center' direction='column' w='100%'>
  //     {Array.from(Array(length).keys()).map((y) => (
  //       <Flex align='center' justify='flex-start' key={`y${y}`} w='100%'>
  //         {Array.from(Array(length).keys()).map((x) => (
  //           <Pixel x={x} y={y} key={`x${x}`}></Pixel>
  //         ))}
  //       </Flex>
  //     ))}
  //   </Flex>
  // )

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

  return (
    <div
      data-zoom-on-wheel='zoom-amount: 0.01; min-scale: 0.8; max-scale: 20;'
      data-pan-on-drag='button: left;'
      ref={ref}
    >
      <svg width={'100%'} height={'100%'} viewBox={`0 0 ${eleclientSize} ${eleclientSize}`}>
        {pixels.map((isActive, index) => (
          <rect
            key={index}
            x={(index % length) * pixelSize}
            y={Math.floor(index / length) * pixelSize}
            width={pixelSize}
            height={pixelSize}
            className='pixel'
            // className={isActive ? 'pixel active' : 'pixel'}
            // onClick={() => togglePixel(index)}
          />
        ))}
        {images.map((image, index) => (
          <image
            key={index}
            x={(image.posX % length) * pixelSize}
            y={Math.floor(image.posY / length) * pixelSize}
            width={pixelSize * Math.random() * 10}
            height={pixelSize * Math.random() * 10}
            xlinkHref={image.url}
            opacity='0.85'
          />
        ))}
      </svg>
    </div>
  )
}

export default MapPixels
