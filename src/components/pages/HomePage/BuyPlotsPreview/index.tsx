import { Divider, Flex, Text, rem } from '@mantine/core'
import React, { useContext } from 'react'
import Button from '~/components/commons/Button'
import { VARIANTS } from '~/components/commons/Button/constants'
import { PlanetContext } from '~/components/contexts/PlanetContext'

const PlotItem = ({ lvl, arrVal, ethVal }: { lvl: number; arrVal: number[]; ethVal: number }) => {
  return (
    <Flex align='center' justify='space-between' w='100%'>
      <Flex align='center' justify='flex-start' gap={rem(23)}>
        <Text fs={rem(24)}>Lv. {lvl}</Text>
        <Text fs={rem(36)}>[{arrVal.join(',')}]</Text>
      </Flex>
      <Text fs={rem(24)}>{ethVal} ETH</Text>
    </Flex>
  )
}

const BuyPlotsPreview = () => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  return (
    <Flex
      align='center'
      justify='center'
      gap={rem(32)}
      direction='column'
      p={rem(40)}
      sx={(theme) => ({
        backgroundColor: theme.colors.background[1],
        borderRadius: rem(16)
      })}
    >
      <Button variant={VARIANTS.PRIMARY} height={isMobile ? 120 : 108} w='100%'>
        <Flex align='center' justify='center' gap={rem(10)} direction='column'>
          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 700,
              textWrap: 'wrap',
              textAlign: 'center'
            })}
          >
            BUY plots for 0.63 ETH Earn 1000 $MBS
          </Text>
          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 400,
              color: theme.colors.text[5]
            })}
          >
            Earn 1000 $MBS
          </Text>
        </Flex>
      </Button>

      <Flex align='center' justify='center' direction='column' gap={rem(20)} w='100%'>
        <PlotItem lvl={0} arrVal={[93, 32]} ethVal={0.01} />
        {/* <Divider color='#4B4B4B' size={rem(1)} w='100%' /> */}
        <PlotItem lvl={1} arrVal={[94, 32]} ethVal={0.01} />
        <PlotItem lvl={2} arrVal={[95, 32]} ethVal={0.01} />
        <PlotItem lvl={3} arrVal={[96, 32]} ethVal={0.01} />
        <PlotItem lvl={4} arrVal={[97, 32]} ethVal={0.01} />
        <PlotItem lvl={5} arrVal={[98, 32]} ethVal={0.01} />
      </Flex>

      <Text
        sx={(theme) => ({
          fontSize: rem(24),
          color: theme.colors.text[6],
          textAlign: 'center'
        })}
      >
        Buy the squares, the price doubles right after, and you immediately get to sell.
      </Text>
    </Flex>
  )
}

export default BuyPlotsPreview
