import { Text, TextProps, rem } from '@mantine/core'
import React, { HTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'

interface ITextMenu extends TextProps {
  isActive?: boolean
  isDisabled?: boolean
  path: string
}

const TextMenu = ({ path, isActive, isDisabled, children, ...props }: ITextMenu) => {
  const navigate = useNavigate()
  const onHandleNavigate = () => {
    if (isDisabled) {
      return
    }
    navigate(path)
  }
  return (
    <Text
      {...props}
      onClick={onHandleNavigate}
      sx={(theme) => ({
        fontWeight: 700,
        padding: `${rem(20)} 0`,
        width: rem(160),
        textAlign: 'center',
        color: isActive ? theme.colors.text[3] : isDisabled ? theme.colors.text[4] : theme.colors.text[0],
        borderBottom: isActive ? `3px solid ${theme.colors.text[3]}` : 'none',
        cursor: 'pointer'
      })}
    >
      {children}
    </Text>
  )
}

export default TextMenu
