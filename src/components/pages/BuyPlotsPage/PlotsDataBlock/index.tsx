import React, { useState } from 'react'
import { Box, Flex, rem, Text } from '@mantine/core'
import Button, { VARIANTS } from '~/components/commons/Button'

const InfoCard = ({ text }: { text: string }) => {
  return (
    <Flex
      align='center'
      justify='center'
      p={rem(10)}
      w='100%'
      sx={(theme) => ({
        borderRadius: rem(8),
        backgroundColor: theme.colors.background[3]
      })}
    >
      <Text fw={700}>{text}</Text>
    </Flex>
  )
}

const DataCard = ({ texts }: { texts: string[] }) => {
  return (
    <Flex
      align='center'
      justify='center'
      direction='column'
      p={rem(20)}
      w='100%'
      gap={rem(20)}
      sx={(theme) => ({
        borderRadius: rem(8),
        backgroundColor: theme.colors.background[3]
      })}
    >
      {texts.map((text) => (
        <Text fw={700} key={text}>
          {text}
        </Text>
      ))}
    </Flex>
  )
}

const PlotsDataBlock = () => {
  const [isShowData, setIsShowData] = useState(false)
  return (
    <Box w='100%'>
      <Flex align='center' justify='space-between' gap={rem(20)} mb={rem(40)}>
        <Button variant={VARIANTS.SECONDARY} w='30%'>
          <Text fs={rem(20)} fw={700}>
            Get ETH on Base
          </Text>
        </Button>
        <Button variant={VARIANTS.SECONDARY} w='30%'>
          <Text fs={rem(20)} fw={700}>
            Claimed 0.00 MBS
          </Text>
        </Button>
        <Box w='30%'></Box>
      </Flex>

      <Flex align='center' justify='space-between' gap={rem(20)} mb={rem(20)}>
        <Box w='30%'>
          <InfoCard text='My plots' />
        </Box>
        <Box w='30%'>
          <InfoCard text='Plot by level' />
        </Box>
        <Box w='30%'>
          <InfoCard text='Current Price' />
        </Box>
      </Flex>

      {isShowData ? (
        <Flex align='center' justify='space-between' gap={rem(20)}>
          <Box w='30%'>
            <DataCard texts={['(79,23)', '(80,23)', '(81,23)', '(82,23)', '(83,23)', '(84,23)']} />
          </Box>
          <Box w='30%'>
            <DataCard texts={['Lv. 1', 'Lv. 2', 'Lv. 3', 'Lv. 4', 'Lv. 5', 'Lv. 6']} />
          </Box>
          <Box w='30%'>
            <DataCard texts={['0.02', '0.04', '0.08', '0.16', '0.32', '0.64']} />
          </Box>
        </Flex>
      ) : (
        <Flex
          align='center'
          justify='center'
          direction='column'
          gap={rem(24)}
          py={rem(80)}
          sx={(theme) => ({
            borderRadius: rem(8),
            backgroundColor: theme.colors.background[3]
          })}
        >
          <Text
            sx={(theme) => ({
              fontStyle: 'italic'
            })}
          >
            Connect wallet first to check your Plots
          </Text>
          <Button variant={VARIANTS.PRIMARY} onClick={() => setIsShowData(true)}>
            <Text fw={700}>Connect Wallet</Text>
          </Button>
        </Flex>
      )}
    </Box>
  )
}

export default PlotsDataBlock
