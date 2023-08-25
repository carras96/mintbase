import React from 'react'
import { ButtonProps, Button as MantineButton, rem } from '@mantine/core'
import { VARIANTS } from './constants'

interface IButton extends ButtonProps {
  isActive?: boolean
  variant?: VARIANTS
  onClick?: any
  height?: number
}

const Button = ({ disabled, height, onClick, variant, isActive, children, ...props }: IButton) => {
  if (variant === VARIANTS.SECONDARY) {
    return (
      <MantineButton
        {...props}
        onClick={onClick}
        disabled={disabled}
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
  } else if (variant === VARIANTS.TERTIARY) {
    return (
      <MantineButton
        {...props}
        onClick={onClick}
        disabled={disabled}
        px={rem(30)}
        py={rem(10)}
        styles={(theme) => ({
          root: {
            borderRadius: rem(8),
            height: rem(height ? height : 32),
            backgroundColor: '#FFF',

            '&:hover': {
              transform: `scale(1.1)`,
              backgroundColor: '#FFF'
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
  } else if (variant === VARIANTS.QUATERNARY) {
    return (
      <MantineButton
        {...props}
        onClick={onClick}
        disabled={disabled}
        px={rem(40)}
        styles={(theme) => ({
          root: {
            borderRadius: rem(45),
            height: rem(height ? height : 55),
            backgroundColor: theme.colors.button[1],

            '&:hover': {
              backgroundColor: theme.colors.button[0]
            },

            '&:disabled': {
              backgroundColor: '#302F2F'
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
        disabled={disabled}
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
      disabled={disabled}
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
