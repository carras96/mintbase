import React from 'react'
import Container from '~/components/commons/Container'
import { Flex, Text, rem } from '@mantine/core'

const Footer = () => {
  return (
    <Container
      py={rem(85)}
      px={rem(200)}
      sx={(theme) => ({
        backgroundColor: theme.colors.background[1]
      })}
    >
      <Flex
        align='flex-start'
        justify='center'
        gap={rem(180)}
        pb={rem(60)}
        w='100%'
        sx={(theme) => ({
          borderBottom: `2px solid ${theme.colors.other[1]}`
        })}
      >
        <Flex align='flex-start' justify='flex-start' direction='column' gap={rem(25)} w='100%'>
          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 500,
              lineHeight: rem(36),
              textTransform: 'capitalize',
              paddingLeft: rem(16),
              borderLeft: `4px solid ${theme.colors.other[0]}`
            })}
          >
            About
          </Text>

          <Flex align='center' justify='center' gap={rem(6)} direction='column' w='100%'>
            <Text
              sx={(theme) => ({
                lineHeight: rem(32),
                textTransform: 'capitalize',
                color: theme.colors.text[2]
              })}
            >
              Contact
            </Text>
            <Text
              sx={(theme) => ({
                lineHeight: rem(32),
                textTransform: 'capitalize',
                color: theme.colors.text[2]
              })}
            >
              News
            </Text>
            <Text
              sx={(theme) => ({
                lineHeight: rem(32),
                textTransform: 'capitalize',
                color: theme.colors.text[2]
              })}
            >
              Term of use
            </Text>
            <Text
              sx={(theme) => ({
                lineHeight: rem(32),
                textTransform: 'capitalize',
                color: theme.colors.text[2]
              })}
            >
              Referral Terms
            </Text>
            <Text
              sx={(theme) => ({
                lineHeight: rem(32),
                textTransform: 'capitalize',
                color: theme.colors.text[2]
              })}
            >
              Brand Asset
            </Text>
          </Flex>
        </Flex>
        <Flex align='flex-start' justify='flex-start' direction='column' gap={rem(25)} w='100%'>
          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 500,
              lineHeight: rem(36),
              textTransform: 'capitalize',
              paddingLeft: rem(16),
              borderLeft: `4px solid ${theme.colors.other[0]}`
            })}
          >
            Developer
          </Text>

          <Flex align='center' justify='center' gap={rem(6)} direction='column' w='100%'>
            <Text
              sx={(theme) => ({
                lineHeight: rem(32),
                textTransform: 'capitalize',
                color: theme.colors.text[2]
              })}
            >
              Docs
            </Text>
            <Text
              sx={(theme) => ({
                lineHeight: rem(32),
                textTransform: 'capitalize',
                color: theme.colors.text[2]
              })}
            >
              Github
            </Text>
          </Flex>
        </Flex>
        <Flex align='flex-start' justify='flex-start' direction='column' gap={rem(25)} w='100%'>
          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 500,
              lineHeight: rem(36),
              textTransform: 'capitalize',
              paddingLeft: rem(16),
              borderLeft: `4px solid ${theme.colors.other[0]}`
            })}
          >
            Find us on
          </Text>

          <Flex align='center' justify='center' gap={rem(6)} direction='column' w='100%'>
            <Text
              sx={(theme) => ({
                lineHeight: rem(32),
                textTransform: 'capitalize',
                color: theme.colors.text[2]
              })}
            >
              Twitter
            </Text>
            <Text
              sx={(theme) => ({
                lineHeight: rem(32),
                textTransform: 'capitalize',
                color: theme.colors.text[2]
              })}
            >
              Discord
            </Text>
            <Text
              sx={(theme) => ({
                lineHeight: rem(32),
                textTransform: 'capitalize',
                color: theme.colors.text[2]
              })}
            >
              Mirror
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex w='100%' align='center' justify='center'>
        <Text
          sx={(theme) => ({
            fontSize: rem(12),
            lineHeight: rem(16),
            letterSpacing: '0.257px',
            color: theme.colors.text[8],
            marginTop: rem(25)
          })}
        >
          Design with love © TanahAirStudio 2020. All right reserved
        </Text>
      </Flex>
    </Container>
  )
}

export default Footer
