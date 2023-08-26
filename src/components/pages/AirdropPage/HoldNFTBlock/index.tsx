import { Flex, AspectRatio, Text, rem, Box, Image } from '@mantine/core'
import React, { useContext } from 'react'

import Image1 from '../.././../../assets/images/Image1.png'
import Image2 from '../.././../../assets/images/Image2.png'
import Image3 from '../.././../../assets/images/Image3.png'
import Image4 from '../.././../../assets/images/Image4.png'
import Button from '~/components/commons/Button'
import { VARIANTS } from '~/components/commons/Button/constants'
import { HeartIcon, HoldIcon, XIcon } from '~/components/commons/Svg'
import { PlanetContext } from '~/components/contexts/PlanetContext'

const HoldNFTBlock = () => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  return (
    <Flex
      justify='center'
      align='center'
      direction='column'
      gap={rem(40)}
      px={rem(40)}
      py={rem(80)}
      w='100%'
      sx={(theme) => ({
        borderRadius: rem(16),
        backgroundColor: theme.colors.background[3]
      })}
    >
      <Flex align='center' justify='space-between' w='100%' direction={isMobile ? 'column' : 'row'}>
        <Flex align='center' justify='flex-start' gap={rem(isMobile ? 16 : 30)} mb={rem(isMobile ? 16 : 0)}>
          <Flex
            align='center'
            justify='center'
            direction='column'
            sx={(theme) => ({
              width: rem(80),
              height: rem(80),
              borderRadius: rem(9),
              backgroundColor: '#4166EB'
            })}
          >
            <Text
              sx={(theme) => ({
                fontSize: rem(16),
                fontWeight: 700
              })}
            >
              400
            </Text>
            <Text
              sx={(theme) => ({
                fontSize: rem(16),
                fontWeight: 700
              })}
            >
              MBB
            </Text>
          </Flex>

          <Flex align='flex-start' justify='space-between' direction='column'>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 700
              })}
            >
              Hold any NFT issued by Base
            </Text>
            <Flex align='center' justify='flex-start' gap={rem(10)}>
              <AspectRatio ratio={1} w={rem(30)}>
                <Image src={Image1} alt='Image1' />
              </AspectRatio>
              <AspectRatio ratio={1} w={rem(30)}>
                <Image src={Image2} alt='Image2' />
              </AspectRatio>
              <AspectRatio ratio={1} w={rem(30)}>
                <Image src={Image3} alt='Image3' />
              </AspectRatio>
              <AspectRatio ratio={1} w={rem(30)}>
                <Image src={Image4} alt='Image4' />
              </AspectRatio>
              <Text
                sx={(theme) => ({
                  fontSize: rem(24),
                  fontWeight: 700
                })}
              >
                ...
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex align='center' justify='center' gap={rem(10)} direction='column'>
          <Button variant={VARIANTS.QUATERNARY}>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 700
              })}
            >
              Check
            </Text>
          </Button>
          <Text
            sx={(theme) => ({
              fontSize: rem(16),
              color: theme.colors.text[1]
            })}
          >
            400 MBB
          </Text>
        </Flex>
      </Flex>

      <Box
        w='100%'
        sx={(theme) => ({
          borderRadius: rem(12),
          backgroundColor: '#111',
          overflow: 'hidden'
        })}
      >
        <Flex
          w='100%'
          align='center'
          justify='flex-start'
          p={rem(20)}
          gap={rem(20)}
          sx={(theme) => ({
            borderBottom: '1px solid #2C2C2C'
          })}
        >
          <HoldIcon />
          <Text
            sx={(theme) => ({
              color: '#B9B9B9'
            })}
          >
            Hold any NFT issued by Base
          </Text>
        </Flex>
        <Flex
          w='100%'
          align='center'
          justify='flex-start'
          p={rem(20)}
          gap={rem(20)}
          sx={(theme) => ({
            borderBottom: '1px solid #2C2C2C'
          })}
        >
          <XIcon />
          <Text
            sx={(theme) => ({
              color: '#B9B9B9'
            })}
          >
            Connect your X (Twitter)
          </Text>
        </Flex>
        <Flex
          w='100%'
          align='center'
          justify='flex-start'
          p={rem(20)}
          gap={rem(20)}
          sx={(theme) => ({
            borderBottom: '1px solid #2C2C2C'
          })}
        >
          <XIcon />
          <Text
            sx={(theme) => ({
              color: '#B9B9B9'
            })}
          >
            Follow mintBase X (Twitter)
          </Text>
        </Flex>
        <Flex w='100%' align='center' justify='flex-start' p={rem(20)} gap={rem(20)}>
          <HeartIcon />
          <Text
            sx={(theme) => ({
              color: '#B9B9B9'
            })}
          >
            Like & RT our post
          </Text>
        </Flex>
      </Box>

      <Flex
        align='center'
        justify='space-between'
        w='100%'
        pb={rem(40)}
        sx={(theme) => ({
          borderBottom: '1px solid #414141'
        })}
      >
        <Flex align='center' justify='flex-start' gap={rem(30)}>
          <Flex
            align='center'
            justify='center'
            direction='column'
            sx={(theme) => ({
              width: rem(80),
              height: rem(80),
              borderRadius: rem(9),
              backgroundColor: '#4166EB'
            })}
          >
            <Text
              sx={(theme) => ({
                fontSize: rem(16),
                fontWeight: 700
              })}
            >
              ???
            </Text>
          </Flex>

          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 700
            })}
          >
            ???
          </Text>
        </Flex>

        <Flex align='center' justify='center' gap={rem(10)} direction='column'>
          <Button variant={VARIANTS.QUATERNARY} disabled>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 700,
                color: '#8A8A8A'
              })}
            >
              Check
            </Text>
          </Button>
          <Text
            sx={(theme) => ({
              fontSize: rem(16),
              color: theme.colors.text[1]
            })}
          >
            ??? MBB
          </Text>
        </Flex>
      </Flex>

      <Flex
        align='center'
        justify='space-between'
        w='100%'
        pb={rem(40)}
        sx={(theme) => ({
          borderBottom: '1px solid #414141'
        })}
      >
        <Flex align='center' justify='flex-start' gap={rem(30)}>
          <Flex
            align='center'
            justify='center'
            direction='column'
            sx={(theme) => ({
              width: rem(80),
              height: rem(80),
              borderRadius: rem(9),
              backgroundColor: '#4166EB'
            })}
          >
            <Text
              sx={(theme) => ({
                fontSize: rem(16),
                fontWeight: 700
              })}
            >
              ???
            </Text>
          </Flex>

          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 700
            })}
          >
            ???
          </Text>
        </Flex>

        <Flex align='center' justify='center' gap={rem(10)} direction='column'>
          <Button variant={VARIANTS.QUATERNARY} disabled>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 700,
                color: '#8A8A8A'
              })}
            >
              Check
            </Text>
          </Button>
          <Text
            sx={(theme) => ({
              fontSize: rem(16),
              color: theme.colors.text[1]
            })}
          >
            ??? MBB
          </Text>
        </Flex>
      </Flex>

      <Flex
        align='center'
        justify='space-between'
        w='100%'
        pb={rem(40)}
        sx={(theme) => ({
          borderBottom: '1px solid #414141'
        })}
      >
        <Flex align='center' justify='flex-start' gap={rem(30)}>
          <Flex
            align='center'
            justify='center'
            direction='column'
            sx={(theme) => ({
              width: rem(80),
              height: rem(80),
              borderRadius: rem(9),
              backgroundColor: '#4166EB'
            })}
          >
            <Text
              sx={(theme) => ({
                fontSize: rem(16),
                fontWeight: 700
              })}
            >
              ???
            </Text>
          </Flex>

          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 700
            })}
          >
            ???
          </Text>
        </Flex>

        <Flex align='center' justify='center' gap={rem(10)} direction='column'>
          <Button variant={VARIANTS.QUATERNARY} disabled>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 700,
                color: '#8A8A8A'
              })}
            >
              Check
            </Text>
          </Button>
          <Text
            sx={(theme) => ({
              fontSize: rem(16),
              color: theme.colors.text[1]
            })}
          >
            ??? MBB
          </Text>
        </Flex>
      </Flex>

      <Flex
        align='center'
        justify='space-between'
        w='100%'
        // pb={rem(40)}
        // sx={(theme) => ({
        //   borderBottom: '1px solid #414141'
        // })}
      >
        <Flex align='center' justify='flex-start' gap={rem(30)}>
          <Flex
            align='center'
            justify='center'
            direction='column'
            sx={(theme) => ({
              width: rem(80),
              height: rem(80),
              borderRadius: rem(9),
              backgroundColor: '#4166EB'
            })}
          >
            <Text
              sx={(theme) => ({
                fontSize: rem(16),
                fontWeight: 700
              })}
            >
              ???
            </Text>
          </Flex>

          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 700
            })}
          >
            ???
          </Text>
        </Flex>

        <Flex align='center' justify='center' gap={rem(10)} direction='column'>
          <Button variant={VARIANTS.QUATERNARY} disabled>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 700,
                color: '#8A8A8A'
              })}
            >
              Check
            </Text>
          </Button>
          <Text
            sx={(theme) => ({
              fontSize: rem(16),
              color: theme.colors.text[1]
            })}
          >
            ??? MBB
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HoldNFTBlock
