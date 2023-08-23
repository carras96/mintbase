import React from 'react'
import { ContainerProps, Container as MantineContainer, rem } from '@mantine/core'

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <MantineContainer maw={rem(1900)} {...props}>
      {children}
    </MantineContainer>
  )
}

export default Container
