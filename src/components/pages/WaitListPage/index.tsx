import React, { useContext, useState } from 'react'
import { Box, Text, rem, Flex, Input } from '@mantine/core'
import CopyToClipboard from 'react-copy-to-clipboard'
import Button from '~/components/commons/Button'
import { VARIANTS } from '~/components/commons/Button/constants'
import { PlanetContext } from '~/components/contexts/PlanetContext'

const WaitListPage = () => {
  const [random, setRandom] = useState(0)
  const [code, setCode] = useState('')
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
        Waitlist check
      </Text>
      <Flex
        w='100%'
        align='center'
        justify='center'
        direction='column'
        gap={rem(80)}
        p={rem(40)}
        sx={(theme) => ({
          borderRadius: rem(16),
          backgroundColor: theme.colors.background[3]
        })}
      >
        <Flex
          align='center'
          justify='space-between'
          w='100%'
          p={rem(20)}
          gap={rem(20)}
          sx={(theme) => ({
            borderRadius: rem(8),
            backgroundColor: theme.colors.background[0]
          })}
        >
          <Input
            placeholder='Enter code'
            value={code}
            onChange={(v) => setCode(v.target.value)}
            w='100%'
            styles={(theme) => ({
              input: {
                border: 'none',
                backgroundColor: 'transparent',
                fontSize: rem(20),
                color: theme.colors.otherText[0]
              }
            })}
          />
          <Button variant={VARIANTS.TERTIARY} height={40} onClick={() => setRandom(Math.floor(Math.random() * 2) + 1)}>
            <Text
              fw={700}
              sx={(theme) => ({
                color: theme.colors.otherText[1]
              })}
            >
              Check
            </Text>
          </Button>
        </Flex>

        <Flex align='center' justify='center' p={rem(isMobile ? 20 : 80)} w='100%'>
          <Text
            sx={(theme) => ({
              fontSize: rem(isMobile ? 28 : 48),
              fontWeight: 700,
              textAlign: 'center'
            })}
          >
            {random === 1
              ? 'Congratulations, you are on the Waitlist!!'
              : random === 2
              ? ':( Looks like this wallet isn’t eligible. No stress, join the waitlist by participating in our airdrop.'
              : ''}
          </Text>
        </Flex>
        <Flex align='center' justify='center' w='100%'>
          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#B0B0B0',
              textAlign: 'center'
            })}
          >
            Conditions: You have entered the code on the "
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 400,
                fontStyle: 'italic',
                color: theme.colors.text[3],
                textDecorationLine: 'underline',
                display: 'inline-block'
              })}
            >
              Airdrop
            </Text>
            " page and claimed at least 400 $MBB
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default WaitListPage
