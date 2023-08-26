import React, { useState } from 'react'
import { Box, Text, rem, Flex, Input, Image, AspectRatio } from '@mantine/core'
import { VARIANTS } from '~/components/commons/Button/constants'
import Button from '~/components/commons/Button'
import CopyToClipboard from 'react-copy-to-clipboard'
import { CopyIcon, RankDiamondIcon, RankGoldIcon, RankIcon, RankSilverIcon, UnRankIcon } from '~/components/commons/Svg'
import AvatarImage from '../../../../assets/images/Avatar.png'

const EligibilityBlock = () => {
  const [isConnectWallet, setIsConnectWallet] = useState(false)
  const [isCheck, setIsCheck] = useState(false)
  const [code, setCode] = useState('')

  return (
    <Box w='100%'>
      {!isConnectWallet && (
        <Flex
          justify='center'
          align='center'
          direction='column'
          gap={rem(20)}
          p={rem(40)}
          w='100%'
          h={rem(378)}
          sx={(theme) => ({
            borderRadius: rem(16),
            backgroundColor: theme.colors.background[3]
          })}
        >
          <Text>Connect wallet to check eligibility</Text>
          <Button variant={VARIANTS.PRIMARY} onClick={() => setIsConnectWallet(true)}>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 700
              })}
            >
              Connect Wallet
            </Text>
          </Button>
        </Flex>
      )}

      {isConnectWallet && (
        <Flex
          justify='center'
          align='center'
          direction='column'
          gap={rem(20)}
          p={rem(40)}
          w='100%'
          sx={(theme) => ({
            borderRadius: rem(16),
            backgroundColor: theme.colors.background[3]
          })}
        >
          <Flex
            align='center'
            justify='center'
            px={rem(40)}
            py={rem(10)}
            sx={(theme) => ({
              borderRadius: rem(16),
              backgroundColor: '#111'
            })}
          >
            <Text
              sx={(theme) => ({
                fontSize: rem(24)
              })}
            >
              $MBB Total:{' '}
              <Text
                sx={(theme) => ({
                  fontSize: rem(36),
                  display: 'inline-block'
                })}
              >
                0.00
              </Text>
            </Text>
          </Flex>
          <Text
            sx={(theme) => ({
              fontSize: rem(36),
              fontWeight: 700
            })}
          >
            You're Eligible!
          </Text>
          <Text
            sx={(theme) => ({
              color: '#7E98F7'
            })}
          >
            {isCheck ? 'Invite a friend, get 100 MBB each' : "Enter your friend's code to claim MBB token"}
          </Text>

          {!isCheck && (
            <Text
              sx={(theme) => ({
                color: '#E4E4E4',
                textAlign: 'center'
              })}
            >
              Please enter an unused code to claim. If you don't have one, you can join our Discord for "How to get
              code" instructions.
            </Text>
          )}
          {!isCheck && (
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
              <Button variant={VARIANTS.TERTIARY} height={40} onClick={() => setIsCheck(true)}>
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
          )}

          {isCheck && (
            <Flex w='100%' align='center' justify='flex-start' gap={rem(12)} direction='column'>
              <Flex
                align='center'
                justify='space-between'
                w='100%'
                pb={rem(12)}
                sx={{
                  borderBottom: '1px solid #5B5B5B'
                }}
              >
                <Flex align='center' justify='flex-start' gap={rem(8)}>
                  <Text
                    fw={700}
                    sx={(theme) => ({
                      color: '#C5C5C5'
                    })}
                  >
                    mbb.ca1342
                  </Text>
                  <CopyToClipboard text='mbb.ca1342'>
                    <CopyIcon
                      style={{
                        cursor: 'pointer'
                      }}
                    />
                  </CopyToClipboard>
                </Flex>

                <Button variant={VARIANTS.QUATERNARY} disabled borderRadius={8}>
                  <Text
                    sx={(theme) => ({
                      fontSize: rem(20),
                      fontWeight: 700,
                      color: '#8A8A8A'
                    })}
                  >
                    Claim
                  </Text>
                </Button>
              </Flex>
              <Flex
                align='center'
                justify='space-between'
                w='100%'
                pb={rem(12)}
                sx={{
                  borderBottom: '1px solid #5B5B5B'
                }}
              >
                <Flex align='center' justify='flex-start' gap={rem(8)}>
                  <Text
                    fw={700}
                    sx={(theme) => ({
                      color: '#C5C5C5'
                    })}
                  >
                    mbb.ca1342
                  </Text>
                  <CopyToClipboard text='mbb.ca1342'>
                    <CopyIcon
                      style={{
                        cursor: 'pointer'
                      }}
                    />
                  </CopyToClipboard>
                </Flex>

                <Button variant={VARIANTS.QUATERNARY} disabled borderRadius={8}>
                  <Text
                    sx={(theme) => ({
                      fontSize: rem(20),
                      fontWeight: 700,
                      color: '#8A8A8A'
                    })}
                  >
                    Claim
                  </Text>
                </Button>
              </Flex>
              <Flex
                align='center'
                justify='space-between'
                w='100%'
                pb={rem(12)}
                sx={{
                  borderBottom: '1px solid #5B5B5B'
                }}
              >
                <Flex align='center' justify='flex-start' gap={rem(8)}>
                  <Text
                    fw={700}
                    sx={(theme) => ({
                      color: '#C5C5C5'
                    })}
                  >
                    mbb.ca1342
                  </Text>
                  <CopyToClipboard text='mbb.ca1342'>
                    <CopyIcon
                      style={{
                        cursor: 'pointer'
                      }}
                    />
                  </CopyToClipboard>
                </Flex>

                <Button variant={VARIANTS.QUATERNARY} disabled borderRadius={8}>
                  <Text
                    sx={(theme) => ({
                      fontSize: rem(20),
                      fontWeight: 700,
                      color: '#8A8A8A'
                    })}
                  >
                    Claim
                  </Text>
                </Button>
              </Flex>
            </Flex>
          )}

          {isCheck && (
            <Flex
              gap={rem(12)}
              justify='space-between'
              w='100%'
              sx={{
                borderRadius: rem(8),
                background: '#2D2D2D'
              }}
            >
              <Flex
                w='100%'
                align='flex-start'
                justify='center'
                gap={rem(10)}
                direction='column'
                py={rem(30)}
                pl={rem(30)}
              >
                <Text
                  w='80%'
                  sx={(theme) => ({
                    color: '#7E98F7',
                    fontStyle: 'italic'
                  })}
                >
                  Invite your friends to level up, the higher rank means earlier plot purchase
                </Text>

                <Flex align='center' justify='flex-start' gap={rem(10)} w='100%'>
                  <AspectRatio ratio={1} w={rem(64)}>
                    <Image src={AvatarImage} alt='AvatarImage' />
                  </AspectRatio>

                  <Flex align='flex-start' justify='center' direction='column' gap={rem(4)}>
                    <Flex align='center' justify='flex-start' gap={rem(4)}>
                      <Text
                        sx={(theme) => ({
                          fontWeight: 700
                        })}
                      >
                        Your rank
                      </Text>
                      <RankIcon />
                    </Flex>

                    <Text
                      sx={(theme) => ({
                        color: '#BFBFBF',
                        fontSize: rem(16)
                      })}
                    >
                      ae6...75b
                    </Text>
                  </Flex>
                </Flex>

                <Flex align='center' justify='flex-start' gap={rem(5)} w='100%'>
                  <UnRankIcon />
                  <Text
                    sx={(theme) => ({
                      fontSize: rem(16)
                    })}
                  >
                    <Text
                      sx={(theme) => ({
                        fontSize: rem(16),
                        color: '#969696',
                        display: 'inline-block'
                      })}
                    >
                      Unrank:
                    </Text>{' '}
                    You haven’t invited anyone
                  </Text>
                </Flex>

                <Flex align='center' justify='flex-start' gap={rem(5)} w='100%'>
                  <RankSilverIcon />
                  <Text
                    sx={(theme) => ({
                      fontSize: rem(16)
                    })}
                  >
                    <Text
                      sx={(theme) => ({
                        fontSize: rem(16),
                        color: '#FFF',
                        display: 'inline-block'
                      })}
                    >
                      Silver:
                    </Text>{' '}
                    You have managed to invite one. Keep progress!
                  </Text>
                </Flex>

                <Flex align='center' justify='flex-start' gap={rem(5)} w='100%'>
                  <RankGoldIcon />
                  <Text
                    sx={(theme) => ({
                      fontSize: rem(16)
                    })}
                  >
                    <Text
                      sx={(theme) => ({
                        fontSize: rem(16),
                        color: '#FFC01D',
                        display: 'inline-block'
                      })}
                    >
                      Gold:
                    </Text>{' '}
                    You have managed to invite two. Keep progress!
                  </Text>
                </Flex>

                <Flex align='center' justify='flex-start' gap={rem(5)} w='100%'>
                  <RankDiamondIcon />
                  <Text
                    sx={(theme) => ({
                      fontSize: rem(16)
                    })}
                  >
                    <Text
                      sx={(theme) => ({
                        fontSize: rem(16),
                        display: 'inline-block',
                        background: 'linear-gradient(180deg, #C12BFF 0%, #4A7DFF 100%)',
                        backgroundClip: 'text',
                        textFillColor: 'transparent'
                      })}
                    >
                      Diamond:
                    </Text>{' '}
                    You have managed to invite three.{' '}
                    <Text
                      sx={(theme) => ({
                        fontSize: rem(16),
                        display: 'inline-block',
                        textDecorationLine: 'underline',
                        color: '#4166EB',
                        cursor: 'pointer'
                      })}
                    >
                      Stay up to minting date
                    </Text>
                  </Text>
                </Flex>
              </Flex>

              <Flex
                justify='center'
                align='center'
                gap={rem(5)}
                direction='column'
                p={rem(10)}
                sx={{
                  borderBottomLeftRadius: rem(6),
                  borderBottomRightRadius: rem(6),
                  width: rem(70),
                  aspectRatio: '1',
                  backgroundColor: '#444444',
                  alignSelf: 'self-start',
                  marginRight: rem(24)
                }}
              >
                <RankIcon />
                <Text
                  sx={(theme) => ({
                    color: '#969696',
                    fontSize: rem(14)
                  })}
                >
                  Unrank
                </Text>
              </Flex>
            </Flex>
          )}
        </Flex>
      )}
    </Box>
  )
}

export default EligibilityBlock
