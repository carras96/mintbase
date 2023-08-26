import React, { createContext, useState } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import EarthMap from '../../../assets/images/EarthMap.png'
import MarsMap from '../../../assets/images/MarsMap.png'
import MoonMap from '../../../assets/images/MoonMap.png'
import SaturnMap from '../../../assets/images/SaturnMap.png'
import Earth from '../../../assets/images/Earth.png'
import Moon from '../../../assets/images/Moon.png'
import Mars from '../../../assets/images/Mars.png'
import Saturn1 from '../../../assets/images/Saturn1.png'
import MarsBG from '../../../assets/images/MarsBG.png'
import EarthBG from '../../../assets/images/EarthBG.png'
import SaturnBG from '../../../assets/images/SaturnBG.png'
import MoonBG from '../../../assets/images/MoonBG.png'
interface ITabPlanet {
  name: string
  image: string
  imagePlanet: string
  imageBG: string
}
interface IPlanetContext {
  planet: ITabPlanet
  setSelectedPlanet: any
  isMobile: boolean
  isTablet: boolean
  isSmallDesktop: boolean
  isMediumDesktop: boolean
  isDesktop: boolean
}

export const MapTabs: ITabPlanet[] = [
  {
    name: 'Earth',
    image: EarthMap,
    imagePlanet: Earth,
    imageBG: EarthBG
  },
  {
    name: 'Mars',
    image: MarsMap,
    imagePlanet: Mars,
    imageBG: MarsBG
  },
  {
    name: 'Moon',
    image: MoonMap,
    imagePlanet: Moon,
    imageBG: MoonBG
  },
  {
    name: 'Saturn',
    image: SaturnMap,
    imagePlanet: Saturn1,
    imageBG: SaturnBG
  }
]

const initialValue: IPlanetContext = {
  planet: MapTabs[0],
  setSelectedPlanet: () => {},
  isMobile: false,
  isTablet: false,
  isSmallDesktop: false,
  isMediumDesktop: false,
  isDesktop: false
}

export const PlanetContext = createContext(initialValue)

export const PlanetContextProvider = ({ children }: React.PropsWithChildren) => {
  const [planet, setSelectedPlanet] = useState(MapTabs[0])
  const isMobile = useMediaQuery('(max-width: 576px)')
  const isTablet = useMediaQuery('(max-width: 991px)')
  const isSmallDesktop = useMediaQuery('(max-width: 1300px)')
  const isMediumDesktop = useMediaQuery('(max-width: 1700px)')
  const isDesktop = useMediaQuery('(max-width: 1900px)')

  return (
    <PlanetContext.Provider
      value={{
        planet: planet,
        setSelectedPlanet: setSelectedPlanet,
        isMobile,
        isTablet,
        isSmallDesktop,
        isMediumDesktop,
        isDesktop
      }}
    >
      {children}
    </PlanetContext.Provider>
  )
}
