import React, { useContext } from 'react'
import { Box, Flex, Image, Text, rem } from '@mantine/core'
import MarketLogo from '../../../../assets/images/MarketLogo.png'
import { PlanetContext } from '~/components/contexts/PlanetContext'

const MarketMaker = () => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)
  //open link
  const openInNewTab = (url: string) => {
    if (window) {
      window?.open(url, '_blank')?.focus()
    }
  }
  return (
    <Flex
      align='center'
      justify='space-between'
      gap={rem(isTablet ? 40 : 80)}
      w='100%'
      direction={isTablet ? 'column' : 'row'}
    >
      <Flex
        align='flex-start'
        justify='center'
        gap={rem(isTablet ? 32 : 64)}
        direction='column'
        w={isTablet ? '100%' : '40%'}
        onClick={() => openInNewTab('https://quantumfund.xyz/')}
        sx={{
          cursor: 'pointer'
        }}
      >
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
          width: isTablet ? '100%' : '60%'
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
