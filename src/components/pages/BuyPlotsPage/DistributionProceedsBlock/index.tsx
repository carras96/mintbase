import { Flex, Text, rem, AspectRatio, Box } from '@mantine/core'
import React, { useContext } from 'react'
import { DivLineIcon, LineIcon } from '~/components/commons/Svg'
import { PlanetContext } from '~/components/contexts/PlanetContext'

const DistributionProceedsBlock = () => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  return (
    <Flex align='flex-start' justify='center' gap={rem(20)} direction='column' w='100%'>
      <Text
        sx={(theme) => ({
          fontSize: rem(24),
          fontWeight: 700
        })}
      >
        Distribution of Proceeds
      </Text>
      <Flex
        align='center'
        justify='center'
        w='100%'
        p={rem(30)}
        gap={rem(16)}
        sx={(theme) => ({
          borderRadius: rem(8),
          backgroundColor: theme.colors.background[3]
        })}
      >
        <Text
          sx={(theme) => ({
            fontSize: rem(32),
            fontWeight: 700
          })}
        >
          0.02 ETH
        </Text>

        <Flex
          h='100%'
          align='center'
          justify='center'
          gap={0}
          sx={{
            display: isMobile ? 'none' : 'flex'
          }}
        >
          <LineIcon />
          <DivLineIcon />
        </Flex>

        <Flex align='center' justify='space-between' direction='column' gap={rem(30)}>
          <Flex align='center' justify='flex-start' gap={rem(9)}>
            <AspectRatio ratio={1} w={rem(58)}>
              <Box
                sx={(theme) => ({
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#D44EA8'
                })}
              ></Box>
            </AspectRatio>
            <Flex align='center' justify='center' direction='column'>
              <Text
                sx={(theme) => ({
                  fontSize: rem(24),
                  fontWeight: 700
                })}
              >
                0.03 ETH
              </Text>
              <Text
                sx={(theme) => ({
                  fontSize: rem(16),
                  fontWeight: 400,
                  color: '#ffffff8a'
                })}
              >
                Current owner
              </Text>
            </Flex>
          </Flex>
          <Flex align='center' justify='flex-start' gap={rem(9)}>
            <AspectRatio ratio={1} w={rem(58)}>
              <Box
                sx={(theme) => ({
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#1556EE'
                })}
              ></Box>
            </AspectRatio>
            <Flex align='center' justify='center' direction='column'>
              <Text
                sx={(theme) => ({
                  fontSize: rem(24),
                  fontWeight: 700
                })}
              >
                0.03 ETH
              </Text>
              <Text
                sx={(theme) => ({
                  fontSize: rem(16),
                  fontWeight: 400,
                  color: '#ffffff8a'
                })}
              >
                Current owner
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DistributionProceedsBlock
