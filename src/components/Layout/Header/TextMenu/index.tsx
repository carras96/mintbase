import { Text, TextProps, createStyles, rem, Divider } from '@mantine/core'
import React, { useContext, useMemo, HTMLAttributes } from 'react'

import { useNavigate } from 'react-router-dom'
import { PlanetContext } from '~/components/contexts/PlanetContext'

interface ITextMenu extends TextProps {
  isActive?: boolean
  isDisabled?: boolean
  path: string
  onHandleNavigate: any
}

const TextMenu = ({ onHandleNavigate, path, isActive, isDisabled, children, ...props }: ITextMenu) => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  const widthSize = useMemo(() => {
    if (isMobile) {
      return 160
    }
    if (isTablet) {
      return 160
    }
    if (isSmallDesktop) {
      return 120
    }
    if (isMediumDesktop) {
      return 140
    }
    return 160
  }, [isMediumDesktop, isMobile, isSmallDesktop, isTablet])

  
  return (
    <Text
      {...props}
      onClick={onHandleNavigate}
      sx={(theme) => ({
        fontWeight: 700,
        padding: `${rem(20)} 0`,
        width: rem(widthSize),
        textAlign: 'center',
        color: isActive ? theme.colors.text[3] : isDisabled ? theme.colors.text[4] : theme.colors.text[0],
        // borderBottom: isActive ? `3px solid ${theme.colors.text[3]}` : 'none',
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 0.3s ease-out',
        '&:hover': {
          transform: `scale(1.05)`
        }
      })}
    >
      <Divider
        sx={(theme) => ({
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTopWidth: rem(3),
          borderTopColor: theme.colors.text[3],
          display: isActive ? 'block' : 'none'
        })}
      />
      {children}
    </Text>
  )
}

export default TextMenu
