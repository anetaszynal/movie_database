import React, { createContext, FC, useContext, useEffect, useMemo, useState } from 'react'
import { theme } from '../theme'
import {additionalBreakpoints} from './additionalBreakpoints'

export const useMediaQueries = (query: string) => {
  const mediaQueryList = useMemo(() => window.matchMedia(`(${query})`),[query])
  const [matches, setMatches] = useState(mediaQueryList.matches)

  useEffect(() => {
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches)
    mediaQueryList.addEventListener('change', listener)

    return () => mediaQueryList.removeEventListener('change', listener)
  }, [mediaQueryList])

  return matches
}

interface Props {
  smallMobile: boolean,
  iPhone: boolean,
  mobile: boolean, 
  smallTablets: boolean, 
  tablets: boolean, 
  smallLaptops: boolean,
  laptops: boolean,
  desktops: boolean,
  personFirstBreakpoint: boolean,
  personSecondBreakpoint: boolean,
  personThirdBreakpoint: boolean,
  personFourthBreakpoint: boolean,
  personFifthBreakpoint: boolean,
  personSixthBreakpoint: boolean,
  movieFirstBreakpoint: boolean,
  movieSecondBreakpoint: boolean,
  movieThirdBreakpoint: boolean
}

const BreakpointsContext = createContext<Props>({} as Props)
export const useBreakpoints = () => useContext(BreakpointsContext)
export const BreakpointsProvider:FC = ({ children }) => {
  const maxWidthString =  'max-width:'
  const smallMobile = useMediaQueries(`${maxWidthString}${theme.breakpoint.smallMobile}`)
  const iPhone = useMediaQueries(`${maxWidthString}${theme.breakpoint.iPhone}`)
  const mobile = useMediaQueries(`${maxWidthString}${theme.breakpoint.mobile}`)
  const smallTablets = useMediaQueries(`${maxWidthString}${theme.breakpoint.smallTablets}`)
  const tablets = useMediaQueries(`${maxWidthString}${theme.breakpoint.tablets}`)
  const smallLaptops = useMediaQueries(`${maxWidthString}${theme.breakpoint.smallLaptops}`)
  const laptops = useMediaQueries(`${maxWidthString}${theme.breakpoint.laptops}`)
  const desktops = useMediaQueries(`${maxWidthString}${theme.breakpoint.desktops}`)

  const personFirstBreakpoint = useMediaQueries(`${maxWidthString}${additionalBreakpoints.firstBreakpoint}`)
  const personSecondBreakpoint = useMediaQueries(`${maxWidthString}${additionalBreakpoints.personSecondBreakpoint}`)
  const personThirdBreakpoint = useMediaQueries(`${maxWidthString}${additionalBreakpoints.personThirdBreakpoint}`)
  const personFourthBreakpoint = useMediaQueries(`${maxWidthString}${additionalBreakpoints.personFourthBreakpoint}`)
  const personFifthBreakpoint = useMediaQueries(`${maxWidthString}${additionalBreakpoints.personFifthBreakpoint}`)
  const personSixthBreakpoint = useMediaQueries(`${maxWidthString}${additionalBreakpoints.personSixthBreakpoint}`)
  const movieFirstBreakpoint = personFirstBreakpoint
  const movieSecondBreakpoint = useMediaQueries(`${maxWidthString}${additionalBreakpoints.movieSecondBreakpoint}`)
  const movieThirdBreakpoint = useMediaQueries(`${maxWidthString}${additionalBreakpoints.movieThirdBreakpoint}`)

  const value = useMemo(() => (
    { smallMobile,iPhone,mobile, smallTablets, tablets, smallLaptops, laptops,desktops, personFirstBreakpoint, personSecondBreakpoint, personThirdBreakpoint, personFourthBreakpoint, personFifthBreakpoint,personSixthBreakpoint, movieFirstBreakpoint, movieSecondBreakpoint, movieThirdBreakpoint }
  ), [smallMobile,iPhone,mobile, smallTablets, tablets, smallLaptops, laptops,desktops,  personFirstBreakpoint, personSecondBreakpoint, personThirdBreakpoint, personFourthBreakpoint, personFifthBreakpoint,personSixthBreakpoint, movieFirstBreakpoint, movieSecondBreakpoint, movieThirdBreakpoint])

  return <BreakpointsContext.Provider value = {value}>{children}</BreakpointsContext.Provider>
}