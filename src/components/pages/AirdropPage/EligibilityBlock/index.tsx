import React from 'react'
import { Box, Text, rem, Flex } from '@mantine/core'
import { VARIANTS } from '~/components/commons/Button/constants'
import Button from '~/components/commons/Button'

const EligibilityBlock = () => {
  return (
    <Flex
      justify='center'
      align='center'
      direction='column'
      gap={rem(20)}
      p={rem(40)}
      w='50%'
      h={rem(378)}
      sx={(theme) => ({
        borderRadius: rem(16),
        backgroundColor: theme.colors.background[3]
      })}
    >
      <Text>Connect wallet to check eligibility</Text>
      <Button variant={VARIANTS.PRIMARY}>
        <Text fw={700}>Connect Wallet</Text>
      </Button>
    </Flex>
  )
}

export default EligibilityBlock
