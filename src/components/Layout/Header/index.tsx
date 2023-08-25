import { AspectRatio, Flex, Image, Text, rem } from '@mantine/core'
import React from 'react'
import Container from '~/components/commons/Container'
import LogoImage from '../../../assets/images/Logo.png'
import TextMenu from './TextMenu'
import Button from '~/components/commons/Button'
import { useLocation } from 'react-router-dom'
import { VARIANTS } from '~/components/commons/Button/constants'

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
  return (
    <Container py={rem(55)} px={rem(170)}>
      <Flex align='center' justify='space-between'>
        <Flex align='center' justify='flex-start' gap={rem(120)}>
          <AspectRatio ratio={1} w={rem(77)}>
            <Image src={LogoImage} alt='Logo' />
          </AspectRatio>
          <Flex align='center' justify='flex-start'>
            {routes.map((route) => (
              <TextMenu path={route.path} isDisabled={route.isDisabled} isActive={route.path === location.pathname}>
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
  )
}

export default Header
