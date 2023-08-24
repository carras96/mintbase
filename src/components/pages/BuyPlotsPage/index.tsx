import { Box, Flex, rem } from '@mantine/core'
import React from 'react'
import PreviewMapTabs from '~/components/commons/PreviewMapTabs'

const BuyPlotsPage = () => {
  return (
    <Flex w='100%' align='center' justify='flex-start' direction='column'>
      <Flex align='center' justify='space-between' w='100%' px={rem(50)}>
        <Box w='45%'>
          <PreviewMapTabs />
        </Box>
        <Box w='45%'>{/* <BuyPlotsPreview /> */}</Box>
      </Flex>
    </Flex>
  )
}

export default BuyPlotsPage
