import { Box, Flex, Text, rem } from '@mantine/core'
import React, { useState } from 'react'
import Button from '~/components/commons/Button'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { VARIANTS } from '~/components/commons/Button/constants'

const ReferralProgramBlock = () => {
  const [isShowData, setIsShowData] = useState(false)

  return (
    <Flex align='flex-start' justify='center' gap={rem(20)} direction='column' w='100%'>
      <Text
        sx={(theme) => ({
          fontSize: rem(24),
          fontWeight: 700
        })}
      >
        Referral Program
      </Text>
      {!isShowData && <Text>{'Reveive >= 0.0025 ETH for every plot purchased with code'}</Text>}

      {isShowData ? (
        <Flex
          align='flex-start'
          justify='center'
          direction='column'
          w='100%'
          gap={rem(12)}
          p={rem(40)}
          sx={(theme) => ({
            borderRadius: rem(8),
            backgroundColor: theme.colors.background[3]
          })}
        >
          <Text
            mb={rem(12)}
            sx={(theme) => ({
              fontStyle: 'italic'
            })}
          >
            {'Reveive >= 0.0025 ETH for every plot purchased with code'}
          </Text>
          <Flex
            align='center'
            justify='space-between'
            w='100%'
            p={rem(20)}
            sx={(theme) => ({
              borderRadius: rem(8),
              backgroundColor: theme.colors.background[0]
            })}
          >
            <Text
              sx={(theme) => ({
                color: theme.colors.otherText[0],
                width: 'calc(100% - 110px)',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              })}
            >
              mintBase.net/buyplots/ref1238763248
            </Text>
            <CopyToClipboard text={'mintBase.net/buyplots/ref1238763248'}>
              <Button variant={VARIANTS.TERTIARY}>
                <Text
                  fw={700}
                  sx={(theme) => ({
                    color: theme.colors.otherText[1]
                  })}
                >
                  Copy
                </Text>
              </Button>
            </CopyToClipboard>
          </Flex>
        </Flex>
      ) : (
        <Flex
          align='flex-start'
          justify='center'
          direction='column'
          w='100%'
          gap={rem(24)}
          p={rem(40)}
          sx={(theme) => ({
            borderRadius: rem(8),
            backgroundColor: theme.colors.background[3]
          })}
        >
          <Box>
            <Text
              mb={rem(12)}
              sx={(theme) => ({
                fontStyle: 'italic'
              })}
            >
              {'Reveive >= 0.0025 ETH for every plot purchased with code'}
            </Text>
            <Text
              sx={(theme) => ({
                fontStyle: 'italic'
              })}
            >
              Locked. Purchase any plot to unlock.
            </Text>
          </Box>
          <Button variant={VARIANTS.PRIMARY} onClick={() => setIsShowData(true)}>
            <Text fw={700}>Connect Wallet</Text>
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

export default ReferralProgramBlock
