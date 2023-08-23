import React from 'react'
import { ButtonProps, Button as MantineButton, rem } from '@mantine/core'

export enum VARIANTS {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary'
}

interface IButton extends ButtonProps {
  isActive?: boolean
  isDisabled?: boolean
  variant?: VARIANTS
}

const Button = ({ variant, isActive, isDisabled, children, ...props }: IButton) => {
  return (
    <MantineButton
      {...props}
      px={rem(40)}
      styles={(theme) => ({
        root: {
          borderRadius: rem(8),
          height: rem(55),
          backgroundColor: variant === VARIANTS.SECONDARY ? theme.colors.button[0] : theme.colors.button[1],

          '&:hover': {
            backgroundColor: variant === VARIANTS.SECONDARY ? theme.colors.button[1] : theme.colors.button[0]
          }
        },
        label: {
          display: 'block',
          height: 'auto'
        }
      })}
    >
      {children}
    </MantineButton>
  )
}

export default Button
