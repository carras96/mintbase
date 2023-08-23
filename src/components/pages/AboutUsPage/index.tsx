import { Box, Text, rem, Flex, Image } from '@mantine/core'
import React from 'react'
import Button from '~/components/commons/Button'
import { BookIcon } from '~/components/commons/Svg'

import AboutUsImage from '../../../assets/images/AboutUsImage.png'

const AboutUsPage = () => {
  return (
    <Box w='100%' pos='relative'>
      <Box w='70%'>
        <Text
          sx={(theme) => ({
            fontSize: rem(36),
            fontWeight: 700,
            marginBottom: rem(12)
          })}
        >
          About mintBase
        </Text>
        <Text
          sx={(theme) => ({
            fontSize: rem(24),
            fontWeight: 400,
            marginBottom: rem(50)
          })}
        >
          At mintBase, we've pioneered an innovative product model that turns ownership into a canvas of creativity and
          an investment opportunity. With a total of 10,000 plots available, we provide a place where individuals can
          express themselves, create, and invest in a new realm of digital asset.
        </Text>

        <Text
          sx={(theme) => ({
            fontSize: rem(24),
            fontWeight: 700,
            marginBottom: rem(12)
          })}
        >
          Personalized Digital Plots
        </Text>
        <Text
          sx={(theme) => ({
            fontSize: rem(20),
            fontWeight: 400,
            marginBottom: rem(50)
          })}
        >
          Choose from our collection of 10,000 virtual land plots and make them your own. Decorate, design, and express
          your unique style on your slice of the digital universe.
        </Text>

        <Text
          sx={(theme) => ({
            fontSize: rem(24),
            fontWeight: 700,
            marginBottom: rem(12)
          })}
        >
          An Investment Beyond Borders
        </Text>
        <Text
          sx={(theme) => ({
            fontSize: rem(20),
            fontWeight: 400,
            marginBottom: rem(50)
          })}
        >
          Our product model offers a unique investment opportunity that evolves with each transaction. When a plot of
          land changes hands, the purchase price doubles for the new owner. As the platform gains traction and demand
          for these unique lands grows, so does their value, providing a distinct investment avenue for enthusiasts.
        </Text>

        <Text
          sx={(theme) => ({
            fontSize: rem(24),
            fontWeight: 700,
            marginBottom: rem(12)
          })}
        >
          Rewards Mechanism
        </Text>
        <Text
          sx={(theme) => ({
            fontSize: rem(20),
            fontWeight: 400,
            marginBottom: rem(50)
          })}
        >
          As a previous owner, when someone purchases a plot of land you once held, you're not only rewarded with the
          original purchase price but also a share of the doubled amount. This innovative profit-sharing structure
          extends up to six generations, ensuring that the initial investors and adopters continue to benefit from the
          growth of the platform. This creates a community of vested interest, where early supporters are rewarded as
          the ecosystem thrives.
        </Text>

        <Button>
          <Flex align='center' justify='center' gap={rem(10)}>
            <BookIcon />
            <Text
              sx={(theme) => ({
                fontSize: rem(20),
                fontWeight: 700
              })}
            >
              Read more
            </Text>
          </Flex>
        </Button>
      </Box>
      <Box
        pos='absolute'
        sx={(theme) => ({
          top: rem(-160),
          right: rem(-160),
          zIndex: 0
        })}
      >
        <Image src={AboutUsImage} alt='AboutUsImage' />
      </Box>
    </Box>
  )
}

export default AboutUsPage
