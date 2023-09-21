import { Box, Flex, createStyles, rem, Text, Input, Image, Menu } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { ArrowDown, CircleArrowSwap } from '~/components/commons/Svg'
import MSBIcon from '../../../assets/images/MSBIcon.png'
import ETHIcon from '../../../assets/images/ETHIcon.png'
import { VARIANTS } from '~/components/commons/Button/constants'
import Button from '~/components/commons/Button'
import { PlanetContext } from '~/components/contexts/PlanetContext'

const useStyles = createStyles((theme, { isMobile }: { isMobile: boolean }) => ({
  boxSwapItem: {
    padding: rem(20),
    borderRadius: rem(18),
    background: '#2B2B2B',
    width: isMobile ? '90%' : '60%',
    maxWidth: '600px'
  },
  boxTag: {
    borderRadius: rem(56),
    padding: `${rem(8)} ${rem(12)}`,
    background: '#131313',
    cursor: 'pointer'
  }
}))

const BurnPage = () => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  const { classes } = useStyles({ isMobile })
  const [msbInputVal, setMsbInputVal] = useState<any>()
  const [otherTokenInputVal, setOtherTokenInputVal] = useState<any>()

  const [selectedToken, setSelectedToken] = useState('ETH')
  const [isConnectWallet, setIsConnectWallet] = useState(false)

  return (
    <Flex w='100%' align='center' justify='flex-start' direction='column' gap={rem(20)}>
      <Flex w='100%' align='center' justify='center' direction='column' gap={rem(10)}>
        <Box className={classes.boxSwapItem}>
          <Flex w='100%' align='center' justify='space-between' mb={rem(30)}>
            <Flex align='flex-start' justify='flex-start' direction='column'>
              <Input
                placeholder='0'
                value={msbInputVal}
                onChange={(v) => setMsbInputVal(v.target.value)}
                w='100%'
                type='number'
                styles={(theme) => ({
                  input: {
                    border: 'none',
                    backgroundColor: 'transparent',
                    fontSize: rem(24),
                    color: theme.colors.otherText[0],
                    paddingLeft: 0
                  }
                })}
              />
              <Text
                sx={{
                  fontSize: rem(16),
                  color: '#FFFFFF'
                }}
              >
                {msbInputVal || 0} MSB = 0.01 {selectedToken}
              </Text>
            </Flex>

            <Box className={classes.boxTag}>
              <Flex align='center' justify='center' gap={rem(8)}>
                <Image src={MSBIcon} alt='MSBIcon' />
                <Text
                  sx={{
                    fontSize: rem(16),
                    fontWeight: 500
                  }}
                >
                  MSB
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Text
            sx={{
              fontSize: rem(16),
              color: '#4166EB'
            }}
          >
            Balance: 0 MSB
          </Text>
        </Box>
        <CircleArrowSwap />
        <Box className={classes.boxSwapItem}>
          <Flex w='100%' align='center' justify='space-between' mb={rem(30)}>
            <Flex align='flex-start' justify='flex-start' direction='column'>
              <Input
                placeholder='0'
                value={otherTokenInputVal}
                onChange={(v) => setOtherTokenInputVal(v.target.value)}
                w='100%'
                type='number'
                styles={(theme) => ({
                  input: {
                    border: 'none',
                    backgroundColor: 'transparent',
                    fontSize: rem(24),
                    color: theme.colors.otherText[0],
                    paddingLeft: 0
                  }
                })}
              />
              <Text
                sx={{
                  fontSize: rem(16),
                  color: '#FFFFFF'
                }}
              >
                $16.21
              </Text>
            </Flex>

            <Menu shadow='md' width={120} position='bottom-end'>
              <Menu.Target>
                <Box className={classes.boxTag}>
                  <Flex align='center' justify='center' gap={rem(8)}>
                    <Image src={ETHIcon} alt='ETHIcon' />
                    <Text
                      sx={{
                        fontSize: rem(16),
                        fontWeight: 500
                      }}
                    >
                      {selectedToken}
                    </Text>
                    <ArrowDown />
                  </Flex>
                </Box>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item onClick={() => setSelectedToken('ETH')}>ETH</Menu.Item>
                <Menu.Item onClick={() => setSelectedToken('BNB')}>BNB</Menu.Item>
                <Menu.Item onClick={() => setSelectedToken('USDC')}>USDC</Menu.Item>
                <Menu.Item onClick={() => setSelectedToken('USDT')}>USDT</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Flex>
        </Box>
      </Flex>
      {isConnectWallet ? (
        <Flex w='100%' align='center' justify='center' direction='column' gap={rem(10)}>
          <Button
            variant={VARIANTS.PRIMARY}
            disabled
            height={40}
            sx={{
              width: isMobile ? '90%' : '60%',
              maxWidth: '600px'
            }}
          >
            <Text
              fw={700}
              sx={{
                color: '#818181',
                fontSize: rem(16),
                fontWeight: 700
              }}
            >
              Swap and burn (Coming soon)
            </Text>
          </Button>
          <Text
            sx={{
              textTransform: 'capitalize',
              color: '#E96A6A',
              lineHeight: rem(32),
              fontSize: rem(16),
              textAlign: 'center'
            }}
          >
            You need to hold at least 1 Plots to ability to redeem your MSB to ETH
          </Text>
          <Text
            sx={{
              textTransform: 'capitalize',
              color: '#30FF45',
              lineHeight: rem(32),
              fontSize: rem(16),
              textAlign: 'center'
            }}
          >
            You are eligible to redeem MSB to ETH
          </Text>

          <Button
            variant={VARIANTS.PRIMARY}
            height={40}
            sx={{
              width: isMobile ? '90%' : '60%',
              maxWidth: '600px'
            }}
          >
            <Text
              fw={700}
              sx={{
                fontSize: rem(16),
                fontWeight: 700
              }}
            >
              Buy Plot Now
            </Text>
          </Button>
          <Text
            sx={{
              textTransform: 'capitalize',
              lineHeight: rem(32),
              fontSize: rem(16),
              display: 'inline'
            }}
          >
            Your balance: 0.00 MSB{' '}
            <Text
              sx={{
                textTransform: 'capitalize',
                color: '#1556EE',
                cursor: 'pointer',
                lineHeight: rem(32),
                fontSize: rem(16),
                display: 'inline'
              }}
            >
              Earn more MSB?
            </Text>
          </Text>
        </Flex>
      ) : (
        <Flex w='100%' align='center' justify='center' direction='column' gap={rem(10)}>
          <Text
            sx={{
              textTransform: 'capitalize',
              color: '#B5B5B5',
              lineHeight: rem(32),
              fontSize: rem(16),
              textAlign: 'center'
            }}
          >
            Connect your wallet to determine whether you are eligible to redeem MSB to ETH
          </Text>

          <Button variant={VARIANTS.PRIMARY} onClick={() => setIsConnectWallet(true)}>
            <Text
              fw={700}
              sx={{
                fontSize: rem(16)
              }}
            >
              Connect Wallet
            </Text>
          </Button>
          <Text
            sx={{
              textTransform: 'capitalize',
              color: '#1556EE',
              cursor: 'pointer',
              lineHeight: rem(32),
              fontSize: rem(16)
            }}
          >
            How to earn MSB?
          </Text>
        </Flex>
      )}
    </Flex>
  )
}

export default BurnPage
