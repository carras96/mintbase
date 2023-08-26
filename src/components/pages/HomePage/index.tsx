import { Box, Flex, Text, rem, Image } from '@mantine/core'
import React, { useContext } from 'react'
import PreviewMapTabs from '../../commons/PreviewMapTabs'
import BuyPlotsPreview from './BuyPlotsPreview'
import ProfitChart from './ProfitChart'
import MBSUtilities from './MBSUtilities'
import MarketMaker from './MarketMaker'
import { PlanetContext } from '~/components/contexts/PlanetContext'

const HomePage = () => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  return (
    <Flex w='100%' align='center' justify='flex-start' direction='column'>
      <Flex align='flex-start' justify='space-between' w='100%' direction={isTablet ? 'column' : 'row'}>
        <Box w={isTablet ? '100%' : '45%'} mb={isTablet ? rem(25) : rem(0)}>
          <PreviewMapTabs />
        </Box>
        <Box w={isTablet ? '100%' : '45%'}>
          <BuyPlotsPreview />
        </Box>
      </Flex>

      <Flex align='center' justify='center' w='100%' pt={rem(160)} pb={rem(250)}>
        <Flex
          align='center'
          justify='center'
          direction={isTablet ? 'column-reverse' : 'column'}
          gap={rem(40)}
          w={isTablet ? '100%' : '75%'}
          p={rem(40)}
          sx={(theme) => ({
            borderRadius: rem(32),
            backgroundColor: theme.colors.background[1]
          })}
        >
          <ProfitChart />
          {isTablet ? (
            <Text
              sx={{
                textAlign: 'center'
              }}
            >
              Each square you own doubles in price after each transaction
            </Text>
          ) : (
            <Text
              sx={(theme) => ({
                fontSize: rem(28),
                textTransform: 'capitalize',
                width: '100%',
                textAlign: 'center'
              })}
            >
              Each square you own{' '}
              <Text
                sx={(theme) => ({
                  fontSize: rem(40),
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  color: theme.colors.text[7],
                  display: 'inline-block'
                })}
              >
                doubles in price
              </Text>{' '}
              after each transaction
            </Text>
          )}
        </Flex>
      </Flex>

      <Flex align='center' justify='center' w='100%' pb={rem(200)}>
        <MBSUtilities />
      </Flex>

      <Flex align='center' justify='center' w='100%' mb={rem(100)} p={rem(40)}>
        <MarketMaker />
      </Flex>
    </Flex>
  )
}

export default HomePage
