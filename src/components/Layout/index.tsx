import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Container from '../commons/Container'
import { rem } from '@mantine/core'

const Layout = () => {
  return (
    <>
      <Header />
      <Container px={rem(160)}>
        <Outlet />
      </Container>

      <Footer />
    </>
  )
}

export default Layout
