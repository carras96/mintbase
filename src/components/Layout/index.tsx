import React, { useContext, useMemo } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Container from '../commons/Container'
import { Box, rem } from '@mantine/core'
import { PlanetContext } from '../contexts/PlanetContext'

const Layout = () => {
  const { planet } = useContext(PlanetContext)
  const location = useLocation()

  const isShowBG = useMemo(() => {
    return location.pathname === '/' || location.pathname === '/buy-plots'
  }, [location.pathname])
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
