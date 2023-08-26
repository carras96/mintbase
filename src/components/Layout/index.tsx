import React, { useContext, useMemo } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Container from '../commons/Container'
import { Box, rem } from '@mantine/core'
import { PlanetContext } from '../contexts/PlanetContext'
import AboutUsImage from '../../assets/images/AboutUsImage.png'

const Layout = () => {
  const { planet } = useContext(PlanetContext)
  const location = useLocation()

  const isShowBG = useMemo(() => {
    return location.pathname === '/' || location.pathname === '/buy-plots'
  }, [location.pathname])

  if (location.pathname === '/about-us') {
    return (
      <Box>
        <Header />
        <Container
          px={rem(170)}
          py={rem(50)}
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
      <Container px={rem(170)} py={rem(50)}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout
