import { Box, Flex, rem } from '@mantine/core'
import React from 'react'
import PreviewMapTabs from '~/components/commons/PreviewMapTabs'
import PlotsDataBlock from './PlotsDataBlock'
import ReferralProgramBlock from './ReferralProgramBlock'
import PlotPurchaseBlock from './PlotPurchaseBlock'
import PlotInfomationBlock from './PlotInfomationBlock'
import DistributionProceedsBlock from './DistributionProceedsBlock'

const BuyPlotsPage = () => {
  return (
    <Flex w='100%' align='center' justify='flex-start' direction='column'>
      <Flex align='flex-start' justify='flex-start' w='100%'>
        <Box w='45%'>
          <PreviewMapTabs />
        </Box>
        <Box w='55%'>
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
