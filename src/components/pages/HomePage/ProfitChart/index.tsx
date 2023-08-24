import React from 'react'
import { AspectRatio, Image } from '@mantine/core'
import HomeChart from '../../../../assets/images/HomeChart.png'

const ProfitChart = () => {
  return (
    <AspectRatio ratio={1281 / 612} w='100%'>
      <Image alt='chart' src={HomeChart} />
    </AspectRatio>
  )
}
export default ProfitChart
