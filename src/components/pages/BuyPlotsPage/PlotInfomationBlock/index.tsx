import React, { useContext } from 'react'
import { Flex, Text, rem, AspectRatio, Box } from '@mantine/core'
import Button from '~/components/commons/Button'
import { VARIANTS } from '~/components/commons/Button/constants'
import { PlanetContext } from '~/components/contexts/PlanetContext'

const PlotInfomationBlock = () => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  return (
    <Flex align='flex-start' justify='center' gap={rem(20)} direction='column' w='100%'>
      <Text
        sx={(theme) => ({
          fontSize: rem(24),
          fontWeight: 700
        })}
      >
        Plot Information
      </Text>
      <Flex
        align='center'
        justify='space-between'
        w='100%'
        p={rem(30)}
        gap={rem(12)}
        sx={(theme) => ({
          borderRadius: rem(8),
          backgroundColor: theme.colors.background[3]
        })}
        direction={isTablet ? 'column' : 'row'}
      >
        <Flex align='flex-start' justify='flex-start' gap={rem(28)}>
          <AspectRatio ratio={1} h='100%' w='100%'>
            <Box
              sx={(theme) => ({
                width: '100%',
                height: '100%',
                backgroundColor: '#D44EA8'
              })}
            ></Box>
          </AspectRatio>

          <Flex align='flex-start' justify='flex-start' gap={rem(6)} direction='column'>
            <Text fw={700}>
              <Text
                sx={(theme) => ({
                  display: 'inline-block',
                  fontWeight: 700,
                  color: theme.colors.otherText[3]
                })}
              >
                Owner
              </Text>{' '}
              ncrypt30.eth
            </Text>
            <Text
              sx={(theme) => ({
                fontSize: rem(40),
                fontWeight: 700
              })}
            >
              {'(89,34)'}
            </Text>
            <Text>Level 2 Plot</Text>
            <Text
              sx={(theme) => ({
                fontSize: rem(16),
                fontStyle: 'italic',
                color: theme.colors.otherText[4]
              })}
            >
              {'After purchase, (96,38) will double in price to 0.04 ETH'}
            </Text>
          </Flex>
        </Flex>

        <Button variant={VARIANTS.PRIMARY} height={73}>
          <Flex align='center' justify='center' direction='column'>
            <Text>Buy this plot for</Text>
            <Text>0.23 ETH</Text>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  )
}

export default PlotInfomationBlock
