import { Box, Flex, rem } from '@mantine/core'
import React, { useContext } from 'react'
import PreviewMapTabs from '~/components/commons/PreviewMapTabs'
import PlotsDataBlock from './PlotsDataBlock'
import ReferralProgramBlock from './ReferralProgramBlock'
import PlotPurchaseBlock from './PlotPurchaseBlock'
import PlotInfomationBlock from './PlotInfomationBlock'
import DistributionProceedsBlock from './DistributionProceedsBlock'
import { PlanetContext } from '~/components/contexts/PlanetContext'

const BuyPlotsPage = () => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  return (
    <Flex w='100%' align='center' justify='flex-start' direction='column'>
      <Flex align='flex-start' justify='flex-start' w='100%' direction={isTablet ? 'column' : 'row'}>
        <Box w={isTablet ? '100%' : '50%'} mb={rem(isTablet ? 40 : 0)}>
          <PreviewMapTabs />
        </Box>
        <Box w={isTablet ? '100%' : '50%'} pt={rem(60)}>
          <Flex w='100%' align='center' justify='center' direction='column' gap={rem(32)}>
            <PlotsDataBlock />
            <ReferralProgramBlock />
            <PlotPurchaseBlock />
            <PlotInfomationBlock />
            <DistributionProceedsBlock />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}

export default BuyPlotsPage
