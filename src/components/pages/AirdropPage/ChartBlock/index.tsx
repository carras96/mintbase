import React, { useContext } from 'react'
import { Flex, rem, Text, createStyles, Box } from '@mantine/core'
import Button from '~/components/commons/Button'
import { VARIANTS } from '~/components/commons/Button/constants'
import ReactEcharts, { EChartsOption } from 'echarts-for-react'
import { PlanetContext } from '~/components/contexts/PlanetContext'

const useStyles = createStyles((theme, { isTablet, isMobile }: { isTablet: boolean, isMobile: boolean }) => ({
  boxChart: {
    '.echarts-for-react': {
      height: isMobile ? '300px !important' : isTablet ? '400px !important' : '100% !important',
      aspectRatio: '1'
    }
  }
}))

const dataChart = [
  {
    value: 40,
    name: 'Community',
    color: '#5D81FF',
    colorText: '#FFFFFF'
  },
  {
    value: 10,
    name: 'Airdrop',
    color: '#74CDFF',
    colorText: '#000000'
  },
  {
    value: 2,
    name: 'Advisors',
    color: '#003498',
    colorText: '#FFFFFF'
  },
  {
    value: 18,
    name: 'Investors',
    color: '#0019FF',
    colorText: '#FFFFFF'
  },
  {
    value: 30,
    name: 'Contributors',
    color: '#FFFFFF',
    colorText: '#000000'
  }
]

const PieChart = () => {
  const option: EChartsOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {d}%'
    },
    legend: {
      top: '5%',
      left: 'center',
      show: false
    },
    series: [
      {
        // name: 'Access From',
        type: 'pie',
        radius: ['40%', '100%'],
        avoidLabelOverlap: true,
        // data: dataChart.map((d) => ({
        //   value: d.value,
        //   name: d.name,
        //   itemStyle: {
        //     borderRadius: 20,
        //     borderColor: '#222',
        //     borderWidth: 10,
        //     color: d.color
        //   }
        // })),
        itemStyle: {
          borderRadius: 20,
          borderColor: '#222',
          borderWidth: 10,
          color: function (params: any) {
            return params.data.color
          }
        },
        label: {
          position: 'inner',
          fontSize: 20,
          fonntWeight: 'bold',
          formatter: '{c}%'
          //   color: function (params: any) {
          //     return params.data.colorText
          //   }
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 28,
            fontWeight: 'bold'
            // color: function (params: any) {
            //     return params.data.colorText
            //   }
          }
        },
        labelLine: {
          show: false
        },
        data: dataChart
      }
    ]
  }
  return <ReactEcharts option={option} />
}

const LegendItemChart = ({ item }: { item: any }) => {
  return (
    <Flex align='center' justify='flex-start' gap={rem(20)}>
      <Box
        sx={(theme) => ({
          width: rem(38),
          height: rem(31),
          backgroundColor: item.color,
          borderRadius: rem(8)
        })}
      ></Box>
      <Text fw={700}>{item.name}</Text>
    </Flex>
  )
}

const ChartBlock = () => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)
  const { classes } = useStyles({ isTablet, isMobile })

  return (
    <Flex
      align='center'
      justify='space-between'
      p={rem(50)}
      w='100%'
      mt={rem(40)}
      sx={(theme) => ({
        borderRadius: rem(32),
        backgroundColor: theme.colors.background[3]
      })}
      direction={isTablet ? 'column' : 'row'}
    >
      <Flex align='flex-start' justify='center' direction='column' gap={rem(12)} w={isTablet ? '100%' : '45%'}>
        <Text
          sx={(theme) => ({
            fontSize: rem(32),
            fontWeight: 700
          })}
        >
          Take part in
        </Text>

        <Text
          sx={(theme) => ({
            fontSize: rem(24),
            fontWeight: 400
          })}
        >
          If you want to take part in mintBase airdrop, consider applying to be a delegate, or diving into our
          governance documentation.
        </Text>

        <Flex align='center' justify='flex-start' gap={rem(24)}>
          <Button variant={VARIANTS.PRIMARY}>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 700
              })}
            >
              Buy Plots
            </Text>
          </Button>

          <Button variant={VARIANTS.QUINARY}>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 700,
                color: '#4166EB'
              })}
            >
              About us
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Flex
        align='center'
        justify='flex-end'
        w={isTablet ? '100%' : '45%'}
        h={isTablet ? 'auto' : rem(500)}
        className={classes.boxChart}
        gap={rem(20)}
        direction={isTablet ? 'column' : 'row'}
        mt={rem(isTablet ? 40 : 0)}
      >
        <PieChart />
        <Flex align='flex-start' justify='center' direction={!isTablet ? 'column' : 'row'} gap={rem(20)} wrap={'wrap'}>
          {dataChart.map((d) => (
            <LegendItemChart item={d} key={d.name} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ChartBlock
