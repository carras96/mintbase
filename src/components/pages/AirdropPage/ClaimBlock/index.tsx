import { Flex, Text, rem } from '@mantine/core'
import React, { useState, useEffect, useCallback, useContext, useMemo } from 'react'
import { PlanetContext } from '~/components/contexts/PlanetContext'
import useGetCountDownInSeconds from '~/hooks/useGetCountDownInSeconds'

const ClockBox = ({ text }: { text: number | string }) => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  const blockSize = useMemo(() => {
    if (isMobile) {
    return 44
    }
    if (isTablet) {
      return 60
    }
    if (isSmallDesktop) {
      return 80
    }
    if (isMediumDesktop) {
      return 100
    }
    return 120
  }, [isMediumDesktop, isMobile, isSmallDesktop, isTablet])

  const fontSize = useMemo(() => {
    if (isMobile) {
      return 20
    }
    if (isTablet) {
      return 24
    }
    if (isSmallDesktop) {
      return 28
    }
    if (isMediumDesktop) {
      return 30
    }
    return 40
  }, [isMediumDesktop, isMobile, isSmallDesktop, isTablet])

  return (
    <Flex
      align='center'
      justify='center'
      w={rem(blockSize)}
      h={rem(blockSize)}
      sx={(theme) => ({
        borderRadius: rem(8),
        backgroundColor: theme.colors.background[2]
      })}
    >
      <Text
        sx={(theme) => ({
          fontSize: rem(fontSize),
          fontWeight: 700
        })}
      >
        {text}
      </Text>
    </Flex>
  )
}

const ClaimBlock = () => {
  const timeUntil = useGetCountDownInSeconds(160000)
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  return (
    <Flex w='100%' align='center' justify='flex-start' direction='column' mt={rem(80)}>
      <Text
        sx={(theme) => ({
          fontSize: rem(48),
          fontWeight: 700
        })}
        mb={rem(20)}
      >
        Claim will be until
      </Text>

      <Flex w='100%' align='center' justify='center' gap={rem(isMobile ? 8 : 16)} wrap='wrap'>
        <Flex align='center' justify='center' gap={rem(isMobile ? 4 : 12)}>
          {/* {timeUntil.days
            .toString()
            .split('')
            .map((d) => (
              <ClockBox text={d} key={d} />
            ))} */}
          <ClockBox text={timeUntil.days.toString()[0]} />
          <ClockBox text={timeUntil.days.toString()[1]} />
        </Flex>

        <Text
          sx={(theme) => ({
            fontSize: rem(24),
            fontWeight: 700
          })}
        >
          :
        </Text>

        <Flex align='center' justify='center' gap={rem(isMobile ? 4 : 12)}>
          {/* {timeUntil.hours
            .toString()
            .split('')
            .map((h) => (
              <ClockBox text={h} key={h} />
            ))} */}
          <ClockBox text={timeUntil.hours.toString()[0]} />
          <ClockBox text={timeUntil.hours.toString()[1]} />
        </Flex>

        <Text
          sx={(theme) => ({
            fontSize: rem(24),
            fontWeight: 700
          })}
        >
          :
        </Text>

        <Flex align='center' justify='center' gap={rem(isMobile ? 4 : 12)}>
          {/* {timeUntil.minutes
            .toString()
            .split('')
            .map((m) => (
              <ClockBox text={m} key={m} />
            ))} */}
          <ClockBox text={timeUntil.minutes.toString()[0]} />
          <ClockBox text={timeUntil.minutes.toString()[1]} />
        </Flex>

        <Text
          sx={(theme) => ({
            fontSize: rem(24),
            fontWeight: 700
          })}
        >
          :
        </Text>

        <Flex align='center' justify='center' gap={rem(isMobile ? 4 : 12)}>
          {/* {timeUntil.seconds
            .toString()
            .split('')
            .map((s) => (
              <ClockBox text={s} key={s} />
            ))} */}
          <ClockBox text={timeUntil.seconds.toString()[0]} />
          <ClockBox text={timeUntil.seconds.toString()[1]} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ClaimBlock
