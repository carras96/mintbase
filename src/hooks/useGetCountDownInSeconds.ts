import { useEffect, useState } from 'react'

import { useTimeout } from '@mantine/hooks'

const MINUTE_IN_SECONDS = 60
const HOUR_IN_SECONDS = 3600
const DAYS_IN_SECONDS = 86400

enum TimeUnit {
  DAYS = 'days',
  HOURS = 'hours',
  MINUTES = 'minutes',
  SECONDS = 'seconds'
}

export interface TimePeriodType {
  days: number
  hours: number
  minutes: number
  seconds: number
}

/**
 * Format number of seconds into year, month, day, hour, minute, seconds
 *
 * @param seconds
 */
const getTimePeriods = (seconds: number): TimePeriodType => {
  let delta = Math.abs(seconds)
  const timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  if (delta >= DAYS_IN_SECONDS) {
    timeLeft.days = Math.floor(delta / DAYS_IN_SECONDS)
    delta -= timeLeft.days * DAYS_IN_SECONDS
  }

  if (delta >= HOUR_IN_SECONDS) {
    timeLeft.hours = Math.floor(delta / HOUR_IN_SECONDS)
    delta -= timeLeft.hours * HOUR_IN_SECONDS
  }

  if (delta >= MINUTE_IN_SECONDS) {
    timeLeft.minutes = Math.floor(delta / MINUTE_IN_SECONDS)
    delta -= timeLeft.minutes * MINUTE_IN_SECONDS
  }

  timeLeft.seconds = delta

  return timeLeft
}

const useGetCountDownInSeconds = (numberOfSeconds: number) => {
  const [countdownInSeconds, setCoundownInSeconds] = useState(numberOfSeconds)
  const [timeUntil, setTimeUntil] = useState(getTimePeriods(countdownInSeconds))

  const { start, clear } = useTimeout(() => {
    const secondsLeft = countdownInSeconds - 1
    const newTimeUntil = getTimePeriods(secondsLeft)
    setCoundownInSeconds(secondsLeft)
    setTimeUntil(newTimeUntil)
    if (secondsLeft <= 0) {
      clear()
    }
  }, 1000)

  useEffect(() => {
    if (countdownInSeconds > 0) {
      start()
    }
    return () => clear()
  }, [countdownInSeconds, start, clear])

  return {
    days: Number(timeUntil.days) < 10 ? `0${timeUntil.days}` : timeUntil.days,
    hours: Number(timeUntil.hours) < 10 ? `0${timeUntil.hours}` : timeUntil.hours,
    minutes: Number(timeUntil.minutes) < 10 ? `0${timeUntil.minutes}` : timeUntil.minutes,
    seconds: Number(timeUntil.seconds) < 10 ? `0${timeUntil.seconds}` : timeUntil.seconds
  }
}

export default useGetCountDownInSeconds
