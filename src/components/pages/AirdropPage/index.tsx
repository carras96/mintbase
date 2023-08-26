import React, { useContext } from 'react'
import { Box, Text, rem, Flex } from '@mantine/core'
import EligibilityBlock from './EligibilityBlock'
import HoldNFTBlock from './HoldNFTBlock'
import ClaimBlock from './ClaimBlock'
import ChartBlock from './ChartBlock'
import { PlanetContext } from '~/components/contexts/PlanetContext'

const AirdropPage = () => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  return (
    <Box w='100%'>
      <Text
        mb={rem(40)}
        sx={(theme) => ({
          fontWeight: 700,
          fontSize: rem(36)
        })}
      >
        Airdrop
      </Text>
      <Text
        sx={(theme) => ({
          fontSize: rem(32),
          fontWeight: 700
        })}
        mb={rem(20)}
      >
        In the Season 1 MBS airdrop, we have 133,000,000 $MBS airdrop to community
      </Text>
      <Text
        sx={(theme) => ({
          fontSize: rem(24),
          fontWeight: 400,
          color: theme.colors.text[1]
        })}
        mb={rem(40)}
      >
        Every MBB will be redeemed to $MBS. the amount of $MBB will be totaled and divided equally by the percentage of
        your MBB holdings. The more MBB you own, the more MBS you get.
      </Text>

      <Flex align='flex-start' justify='center' gap={rem(24)} w='100%' direction={isTablet ? 'column' : 'row'}>
        <EligibilityBlock />
        <HoldNFTBlock />
      </Flex>

      <ClaimBlock />
      <ChartBlock />
    </Box>
  )
}

export default AirdropPage
