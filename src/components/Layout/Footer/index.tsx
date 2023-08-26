import React from 'react'
import Container from '~/components/commons/Container'
import { Flex, Text, rem } from '@mantine/core'

const TextFooter = ({ children }: React.PropsWithChildren) => {
  return (
    <Text
      sx={(theme) => ({
        lineHeight: rem(32),
        textTransform: 'capitalize',
        color: theme.colors.text[2],
        cursor: 'pointer',
        transition: 'all 0.3s ease-out',
        '&:hover': {
          transform: `scale(1.05)`
        }
      })}
    >
      {children}
    </Text>
  )
}

const Footer = () => {
  return (
    <Container
      py={rem(85)}
      px={rem(170)}
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
        <Flex align='flex-start' justify='flex-start' direction='column' gap={rem(25)}>
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

          <Flex align='flex-start' justify='center' gap={rem(6)} direction='column' w='100%'>
            <TextFooter>Contact</TextFooter>
            <TextFooter>News</TextFooter>
            <TextFooter>Term of use</TextFooter>
            <TextFooter>Referral Terms</TextFooter>
            <TextFooter>Brand Asset</TextFooter>
          </Flex>
        </Flex>
        <Flex align='flex-start' justify='flex-start' direction='column' gap={rem(25)}>
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

          <Flex align='flex-start' justify='center' gap={rem(6)} direction='column' w='100%'>
            <TextFooter>Docs</TextFooter>
            <TextFooter>Github</TextFooter>
          </Flex>
        </Flex>
        <Flex align='flex-start' justify='flex-start' direction='column' gap={rem(25)}>
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

          <Flex align='flex-start' justify='center' gap={rem(6)} direction='column' w='100%'>
            <TextFooter>Twitter</TextFooter>
            <TextFooter>Discord</TextFooter>
            <TextFooter>Mirror</TextFooter>
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
