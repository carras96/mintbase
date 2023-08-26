import React, { useContext } from 'react'
import { AspectRatio, Image } from '@mantine/core'
import HomeChart from '../../../../assets/images/HomeChart.png'
import HomeChartMobile from '../../../../assets/images/HomeChartMobile.png'
import { PlanetContext } from '~/components/contexts/PlanetContext'

const ProfitChart = () => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)

  return (
    <>
      {isTablet ? (
        <AspectRatio ratio={253 / 616} w={isMobile ? '100%' : isTablet ? '30%' : '100%'}>
          <Image alt='chart' src={HomeChartMobile} />
        </AspectRatio>
      ) : (
        <AspectRatio ratio={1281 / 612} w='100%'>
          <Image alt='chart' src={HomeChart} />
        </AspectRatio>
      )}
    </>
  )
}
export default ProfitChart
