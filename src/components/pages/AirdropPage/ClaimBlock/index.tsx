import { Flex, Text, rem } from '@mantine/core'
import React, { useState, useEffect, useCallback } from 'react'
import useGetCountDownInSeconds from '~/hooks/useGetCountDownInSeconds'

const ClockBox = ({ text }: { text: number | string }) => {
  return (
    <Flex
      align='center'
      justify='center'
      w={rem(120)}
      h={rem(120)}
      sx={(theme) => ({
        borderRadius: rem(8),
        backgroundColor: theme.colors.background[2]
      })}
    >
      <Text
        sx={(theme) => ({
          fontSize: rem(40),
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

      <Flex w='100%' align='center' justify='center' gap={rem(16)}>
        <Flex align='center' justify='center' gap={rem(12)}>
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

        <Flex align='center' justify='center' gap={rem(12)}>
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

        <Flex align='center' justify='center' gap={rem(12)}>
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

        <Flex align='center' justify='center' gap={rem(12)}>
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
