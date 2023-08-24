import React from 'react'
import { Box, Flex, Image, Text, rem } from '@mantine/core'
import MarketLogo from '../../../../assets/images/MarketLogo.png'

const MarketMaker = () => {
  return (
    <Flex align='center' justify='space-between' gap={rem(80)} w='100%'>
      <Flex align='flex-start' justify='center' gap={rem(64)} direction='column' w='40%'>
        <Text
          sx={(theme) => ({
            fontSize: rem(40),
            fontWeight: 700,
            lineHeight: rem(32),
            textTransform: 'capitalize',
            color: theme.colors.text[2]
          })}
        >
          Our Market Maker
        </Text>
        <Image alt='market' src={MarketLogo} />
      </Flex>
      <Text
        sx={(theme) => ({
          fontSize: rem(20),
          fontWeight: 400,
          textTransform: 'capitalize',
          color: theme.colors.text[2],
          width: '60%'
        })}
      >
        In the financial markets, Quantum Optermuik offers expertise beyond market-making to sculpt growth
        opportunities. Comprising a dedicated team, their years of experience bridge financial aspirations to reality.
        Over 250 satisfied clients have benefited from their expertise in stocks and crypto gained from four years of
        experience and three years in crypto. Quantum Optermuik's extensive network of 20+ cryptocurrency exchanges
        underscores their commitment to success.
      </Text>
    </Flex>
  )
}

export default MarketMaker
