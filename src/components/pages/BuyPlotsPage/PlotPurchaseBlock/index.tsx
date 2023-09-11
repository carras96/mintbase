import { Flex, Text, rem, Box, Checkbox } from '@mantine/core'
import React from 'react'
import Button from '~/components/commons/Button'
import { VARIANTS } from '~/components/commons/Button/constants'

const CustomIconCheckbox = ({ indeterminate, className }: { indeterminate: boolean; className: string }) => {
  return (
    <Text
      className={className}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: rem(24),
        color: '#000 !important'
      }}
    >
      x
    </Text>
  )
}

const PlotPurchaseRow = ({ data }: { data: any }) => {
  return (
    <Flex
      w='100%'
      p={rem(40)}
      align='center'
      justify='space-between'
      sx={(theme) => ({
        borderBottom: `1px solid #303030`
      })}
    >
      <Text>{data.lvl}</Text>
      <Text>{data.arrval}</Text>
      <Text>{data.ethVal}</Text>
      <Checkbox
        icon={CustomIconCheckbox}
        size={rem(30)}
        styles={{
          input: {
            '&:checked': {
              backgroundColor: '#fff',
              borderColor: '#fff'
            }
          }
        }}
      />
    </Flex>
  )
}

const PlotPurchaseBlock = () => {
  return (
    <Box w='100%'>
      <Flex align='flex-start' justify='center' gap={rem(20)} direction='column' w='100%'>
        <Text
          sx={(theme) => ({
            fontSize: rem(24),
            fontWeight: 700
          })}
        >
          Plot purchase
        </Text>
        <Flex
          align='center'
          justify='center'
          direction='column'
          w='100%'
          px={rem(40)}
          py={rem(80)}
          sx={(theme) => ({
            borderRadius: rem(8),
            backgroundColor: theme.colors.background[3]
          })}
        >
          <Text
            sx={(theme) => ({
              color: theme.colors.text[9],
              fontSize: rem(24)
            })}
          >
            Select plots to buy
          </Text>
        </Flex>
      </Flex>

      <Flex align='flex-start' justify='center' gap={rem(20)} direction='column' w='100%' mt={rem(24)}>
        <Flex w='100%' align='center' justify='space-between'>
          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 700
            })}
          >
            Plot purchase
          </Text>
          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 700,
              color: theme.colors.otherText[2]
            })}
          >
            Clear all selected plots
          </Text>
        </Flex>
        <Flex align='center' justify='center' direction='column' w='100%'>
          <PlotPurchaseRow data={{ lvl: 'Lv. 1', arrval: '[92,32]', ethVal: '0.01 ETH' }} />
          <PlotPurchaseRow data={{ lvl: 'Lv. 2', arrval: '[91,32]', ethVal: '0.02 ETH' }} />
          <PlotPurchaseRow data={{ lvl: 'Lv. 3', arrval: '[42,32]', ethVal: '0.04 ETH' }} />
          <PlotPurchaseRow data={{ lvl: 'Lv. 4', arrval: '[92,11]', ethVal: '0.08 ETH' }} />
        </Flex>
        <Button variant={VARIANTS.PRIMARY} height={108} w='100%'>
          <Flex align='center' justify='center' gap={rem(10)} direction='column'>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 700
              })}
            >
              Buy 4 plot for 0.23 ETH
            </Text>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 400,
                color: theme.colors.text[5]
              })}
            >
              Earn 230 MSB
            </Text>
          </Flex>
        </Button>
      </Flex>
    </Box>
  )
}

export default PlotPurchaseBlock
