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
  onClick?: any
  height?: number
}

const Button = ({ height, onClick, variant, isActive, isDisabled, children, ...props }: IButton) => {
  if (variant === VARIANTS.SECONDARY) {
    return (
      <MantineButton
        {...props}
        onClick={onClick}
        px={rem(40)}
        styles={(theme) => ({
          root: {
            borderRadius: rem(8),
            height: rem(height ? height : 55),
            backgroundColor: isActive ? theme.colors.button[1] : theme.colors.button[0],

            '&:hover': {
              backgroundColor: theme.colors.button[1]
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
  } else if (variant === VARIANTS.PRIMARY) {
    return (
      <MantineButton
        {...props}
        onClick={onClick}
        px={rem(40)}
        styles={(theme) => ({
          root: {
            borderRadius: rem(8),
            height: rem(height ? height : 55),
            backgroundColor: theme.colors.button[1],

            '&:hover': {
              backgroundColor: theme.colors.button[0]
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
  return (
    <MantineButton
      {...props}
      onClick={onClick}
      px={rem(40)}
      styles={(theme) => ({
        root: {
          borderRadius: rem(8),
          height: rem(height ? height : 55),
          backgroundColor: theme.colors.button[1],

          '&:hover': {
            backgroundColor: theme.colors.button[0]
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
