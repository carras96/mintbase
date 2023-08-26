import React, { useContext, useMemo } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Container from '../commons/Container'
import { Box, rem } from '@mantine/core'
import { PlanetContext } from '../contexts/PlanetContext'
import AboutUsImage from '../../assets/images/AboutUsImage.png'

const Layout = () => {
  const { planet, isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

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
      return 10
    }
    if (isTablet) {
      return 20
    }
    if (isSmallDesktop) {
      return 30
    }
    if (isMediumDesktop) {
      return 30
    }
    return 50
  }, [isMediumDesktop, isMobile, isSmallDesktop, isTablet])

  const location = useLocation()

  const isShowBG = useMemo(() => {
    return location.pathname === '/' || location.pathname === '/buy-plots'
  }, [location.pathname])

  if (location.pathname === '/about-us') {
    return (
      <Box>
        <Header />
        <Container
          px={rem(pxNumber)}
          py={rem(pyNumber)}
          sx={(theme) => ({
            backgroundImage: `url(${AboutUsImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat'
          })}
        >
          <Outlet />
        </Container>
        <Footer />
      </Box>
    )
  }
  return (
    <Box
      sx={(theme) => ({
        backgroundImage: isShowBG ? `url(${planet.imageBG})` : 'unset',
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
      })}
    >
      <Header />
      <Container px={rem(pxNumber)} py={rem(pyNumber)}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout
