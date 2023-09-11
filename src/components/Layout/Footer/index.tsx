import React, { useContext, useMemo } from 'react'
import Container from '~/components/commons/Container'
import { Flex, Text, rem } from '@mantine/core'
import { PlanetContext } from '~/components/contexts/PlanetContext'

interface ITextFooter extends React.PropsWithChildren {
  onClick?: any
}

const TextFooter = ({ children, onClick }: ITextFooter) => {
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
      onClick={() => {
        onClick && onClick()
      }}
    >
      {children}
    </Text>
  )
}

const Footer = () => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  //open link
  const openInNewTab = (url: string) => {
    if (window) {
      window?.open(url, '_blank')?.focus()
    }
  }

  const pxNumber = useMemo(() => {
    if (isMobile) {
      return 40
    }
    if (isTablet) {
      return 40
    }
    if (isSmallDesktop) {
      return 50
    }
    if (isMediumDesktop) {
      return 80
    }
    return 170
  }, [isMediumDesktop, isMobile, isSmallDesktop, isTablet])

  const pyNumber = useMemo(() => {
    if (isMobile) {
      return 40
    }
    if (isTablet) {
      return 40
    }
    if (isSmallDesktop) {
      return 40
    }
    if (isMediumDesktop) {
      return 50
    }
    return 85
  }, [isMediumDesktop, isMobile, isSmallDesktop, isTablet])

  const gapMenuFooter = useMemo(() => {
    if (isMobile) {
      return 40
    }
    if (isTablet) {
      return 50
    }
    if (isSmallDesktop) {
      return 80
    }
    if (isMediumDesktop) {
      return 130
    }
    return 180
  }, [isMediumDesktop, isMobile, isSmallDesktop, isTablet])

  const pbFlex = useMemo(() => {
    if (isMobile) {
      return 15
    }
    if (isTablet) {
      return 30
    }
    if (isSmallDesktop) {
      return 40
    }
    if (isMediumDesktop) {
      return 50
    }
    return 60
  }, [isMediumDesktop, isMobile, isSmallDesktop, isTablet])

  return (
    <Container
      py={rem(pyNumber)}
      px={rem(pxNumber)}
      sx={(theme) => ({
        backgroundColor: theme.colors.background[1]
      })}
    >
      <Flex
        align='flex-start'
        justify='center'
        gap={rem(gapMenuFooter)}
        pb={rem(pbFlex)}
        w='100%'
        direction={isMobile ? 'column' : 'row'}
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
            {/* //example */}
            {/* <TextFooter onClick={() => openInNewTab('https://www.google.com.vn/')}>Contact</TextFooter> */}

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
            <TextFooter onClick={() => openInNewTab('https://twitter.com/mintOnBase')}>Twitter</TextFooter>
            <TextFooter onClick={() => openInNewTab('https://discord.com/invite/mintbase')}>Discord</TextFooter>
            <TextFooter onClick={() => openInNewTab('https://mirror.xyz/0x2EdaC31D8364982443b0FB4E1fe1b2F216b60748')}>
              Mirror
            </TextFooter>
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
