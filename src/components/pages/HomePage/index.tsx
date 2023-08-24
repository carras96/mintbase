import { Box, Flex, Text, rem, Image } from '@mantine/core'
import React from 'react'
import PreviewMapTabs from '../../commons/PreviewMapTabs'
import BuyPlotsPreview from './BuyPlotsPreview'
import ProfitChart from './ProfitChart'
import MBSUtilities from './MBSUtilities'
import MarketMaker from './MarketMaker'

const HomePage = () => {
  return (
    <Flex w='100%' align='center' justify='flex-start' direction='column'>
      <Flex align='center' justify='space-between' w='100%' px={rem(50)}>
        <Box w='45%'>
          <PreviewMapTabs />
        </Box>
        <Box w='45%'>
          <BuyPlotsPreview />
        </Box>
      </Flex>

      <Flex align='center' justify='center' w='100%' pt={rem(160)} pb={rem(250)}>
        <Flex
          align='center'
          justify='center'
          direction='column'
          gap={rem(40)}
          w='75%'
          p={rem(40)}
          sx={(theme) => ({
            borderRadius: rem(32),
            backgroundColor: theme.colors.background[1]
          })}
        >
          <ProfitChart />
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
