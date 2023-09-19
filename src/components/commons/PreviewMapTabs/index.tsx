import { AspectRatio, BackgroundImage, Box, Flex, Image, Overlay, Text, rem, Modal } from '@mantine/core'
import React, { useContext, useState } from 'react'
import Button from '~/components/commons/Button'
import { MapTabs, PlanetContext } from '~/components/contexts/PlanetContext'
import { VARIANTS } from '../Button/constants'
import MapPixels from './MapPixels'
import { useDisclosure, useHover } from '@mantine/hooks'

const PreviewMapTabs = () => {
  const { planet, setSelectedPlanet, isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } =
    useContext(PlanetContext)
  // const [opened, { close, open }] = useDisclosure(false)

  return (
    <Flex align='center' justify='center' gap={rem(20)} direction='column'>
      <BackgroundImage src={planet.imagePlanet} w='100%' p={rem(60)}>
        <Flex align='center' justify='center' w='100%'>
          <AspectRatio ratio={1} w='100%'>
            {/* <Image src={planet.image} alt='map' /> */}
            <MapPixels length={100} />
          </AspectRatio>
        </Flex>
      </BackgroundImage>
      <Flex align='center' justify='center' gap={rem(10)} px={rem(60)} wrap={'wrap'} w='100%'>
        {MapTabs.map((tab) => (
          <Button
            variant={VARIANTS.SECONDARY}
            key={tab.name}
            onClick={() => setSelectedPlanet(tab)}
            isActive={tab.name === planet.name}
            sx={{
              flex: 1
            }}
          >
            <Text fw={700}>{tab.name}</Text>
          </Button>
        ))}
      </Flex>
      {/* {isTablet ? (
        <Modal
          opened={opened}
          onClose={close}
          fullScreen
          transitionProps={{ transition: 'fade', duration: 200 }}
          styles={(theme) => ({
            body: {
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }
          })}
        >
          <Box px={rem(30)} pb={rem(30)} w='100%'>
            <MapPixels length={100} />
          </Box>
        </Modal>
      ) : (
        <Modal
          opened={opened}
          onClose={close}
          size='calc(100vh - 15rem)'
          centered
          transitionProps={{ transition: 'fade', duration: 200 }}
        >
          <Box px={rem(30)} pb={rem(30)} w='100%'>
            <MapPixels length={100} />
          </Box>
        </Modal>
      )} */}
    </Flex>
  )
}

export default PreviewMapTabs
