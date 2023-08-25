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
  console.log(timeUntil, 'timeUntil')
  return (
    <Flex w='100%' align='center' justify='flex-start' direction='column' mt={rem(80)}>
      <Text
        sx={(theme) => ({
          fontSize: rem(48),
          fontWeight: 700
        })}
      >
        Claim will be until
      </Text>

      <Flex w='100%' align='center' justify='center' gap={rem(16)}>
        <Flex align='center' justify='center' gap={rem(12)}>
          {timeUntil.days
            .toString()
            .split('')
            .map((d) => (
              <ClockBox text={d} key={d} />
            ))}
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
          {timeUntil.hours
            .toString()
            .split('')
            .map((h) => (
              <ClockBox text={h} key={h} />
            ))}
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
          {timeUntil.minutes
            .toString()
            .split('')
            .map((m) => (
              <ClockBox text={m} key={m} />
            ))}
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
          {timeUntil.seconds
            .toString()
            .split('')
            .map((s) => (
              <ClockBox text={s} key={s} />
            ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ClaimBlock
