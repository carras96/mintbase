import { AspectRatio, Flex, Image, Text, rem, Box, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useContext, useMemo } from 'react'
import Container from '~/components/commons/Container'
import LogoImage from '../../../assets/images/Logo.png'
import TextMenu from './TextMenu'
import Button from '~/components/commons/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import { VARIANTS } from '~/components/commons/Button/constants'
import { PlanetContext } from '~/components/contexts/PlanetContext'
import { MenuIcon } from '~/components/commons/Svg'

const routes = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/buy-plots',
    label: 'Buy Plots'
  },
  {
    path: '/marketplace',
    label: 'Marketplace',
    isDisabled: true
  },
  {
    path: '/airdrop',
    label: 'Airdrop'
  },
  {
    path: '/wait-list',
    label: 'Waitlist'
  },
  {
    path: '/about-us',
    label: 'About us'
  }
]

const Header = () => {
  const location = useLocation()
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  const navigate = useNavigate()

  const pxNumber = useMemo(() => {
    if (isMobile) {
      return 20
    }
    if (isTablet) {
      return 30
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
      return 20
    }
    if (isTablet) {
      return 20
    }
    if (isSmallDesktop) {
      return 30
    }
    if (isMediumDesktop) {
      return 40
    }
    return 55
  }, [isMediumDesktop, isMobile, isSmallDesktop, isTablet])

  const gapMenu = useMemo(() => {
    if (isMobile) {
      return 10
    }
    if (isTablet) {
      return 30
    }
    if (isSmallDesktop) {
      return 50
    }
    if (isMediumDesktop) {
      return 80
    }
    return 120
  }, [isMediumDesktop, isMobile, isSmallDesktop, isTablet])

  const [opened, { open, close }] = useDisclosure(false)

  const onHandleNavigate = (path: string, isDisabled: boolean) => {
    if (isDisabled) {
      return
    }
    navigate(path)
  }

  const onHandleNavigateMobile = (path: string, isDisabled: boolean) => {
    if (isDisabled) {
      return
    }
    navigate(path)
    close()
  }
  return (
    <>
      {isTablet ? (
        <Container py={rem(pyNumber)} px={rem(pxNumber)}>
          <Flex align='center' justify='center' pos='relative'>
            <AspectRatio ratio={1} w={rem(isMobile ? 40 : 50)} onClick={() => onHandleNavigate('/', false)}>
              <Image src={LogoImage} alt='Logo' />
            </AspectRatio>
            <Box
              onClick={open}
              sx={{
                position: 'absolute',
                left: 0,
                cursor: 'pointer',
                transition: 'all 0.3s ease-out',
                '&:hover': {
                  transform: `scale(1.1)`
                }
              }}
            >
              <MenuIcon />
            </Box>
          </Flex>

          <Modal
            opened={opened}
            onClose={close}
            title=''
            fullScreen={true}
            transitionProps={{ transition: 'fade', duration: 200 }}
            styles={(theme) => ({
              content: {
                backgroundColor: theme.colors.background[3],
                padding: rem(30)
              },
              header: {
                backgroundColor: theme.colors.background[3]
              }
            })}
          >
            <Flex w='100%' align='center' justify='center' direction='column' gap={rem(40)}>
              <AspectRatio ratio={1} w={rem(isMobile ? 55 : 70)}>
                <Image src={LogoImage} alt='Logo' />
              </AspectRatio>
              {routes.map((route) => (
                <TextMenu
                  path={route.path}
                  isDisabled={route.isDisabled}
                  isActive={route.path === location.pathname}
                  onHandleNavigate={() => onHandleNavigateMobile(route.path, !!route.isDisabled)}
                >
                  {route.label}
                </TextMenu>
              ))}
              <Button variant={VARIANTS.PRIMARY}>
                <Text fw={700}>Connect Wallet</Text>
              </Button>
            </Flex>
          </Modal>
        </Container>
      ) : (
        <Container py={rem(pyNumber)} px={rem(pxNumber)}>
          <Flex align='center' justify='space-between'>
            <Flex align='center' justify='flex-start' gap={rem(gapMenu)}>
              <AspectRatio ratio={1} w={rem(77)}>
                <Image src={LogoImage} alt='Logo' />
              </AspectRatio>
              <Flex align='center' justify='flex-start'>
                {routes.map((route) => (
                  <TextMenu
                    path={route.path}
                    isDisabled={route.isDisabled}
                    isActive={route.path === location.pathname}
                    onHandleNavigate={() => onHandleNavigate(route.path, !!route.isDisabled)}
                  >
                    {route.label}
                  </TextMenu>
                ))}
              </Flex>
            </Flex>
            <Button variant={VARIANTS.PRIMARY}>
              <Text fw={700}>Connect Wallet</Text>
            </Button>
          </Flex>
        </Container>
      )}
    </>
  )
}

export default Header
