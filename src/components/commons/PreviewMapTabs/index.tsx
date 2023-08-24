import { AspectRatio, BackgroundImage, Box, Flex, Image, Text, rem } from '@mantine/core'
import React, { useContext, useState } from 'react'
import Button, { VARIANTS } from '~/components/commons/Button'
import { MapTabs, PlanetContext } from '~/components/contexts/PlanetContext'

const PreviewMapTabs = () => {
  const { planet, setSelectedPlanet } = useContext(PlanetContext)
  return (
    <Flex align='center' justify='center' gap={rem(20)} direction='column'>
      <BackgroundImage src={planet.imagePlanet} w='100%' p={rem(60)}>
        <Flex align='center' justify='center' w='100%'>
          <AspectRatio ratio={1} w='100%'>
            <Image src={planet.image} alt='map' />
          </AspectRatio>
        </Flex>
      </BackgroundImage>
      <Flex align='center' justify='space-around' gap={rem(10)} px={rem(60)}>
        {MapTabs.map((tab) => (
          <Button
            variant={VARIANTS.SECONDARY}
            key={tab.name}
            onClick={() => setSelectedPlanet(tab)}
            isActive={tab.name === planet.name}
          >
            <Text fw={700}>{tab.name}</Text>
          </Button>
        ))}
      </Flex>
    </Flex>
  )
}

export default PreviewMapTabs
