import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { theme } from '../../../../theme'

export const useMediaQueries = (query) => {
  const mediaQueryList = useMemo(() => window.matchMedia(`(${query})`),[query])
  const [matches, setMatches] = useState(mediaQueryList.matches)

  useEffect(() => {
    const listener = event => setMatches(event.matches)
    mediaQueryList.addEventListener('change', listener)

    return () => mediaQueryList.removeEventListener('change', listener)
  }, [mediaQueryList])

  return matches
}

const BreakpointsContext = createContext(undefined)
export const useBreakpoints = () => useContext(BreakpointsContext)
export const BreakpointsProvider = ({ children }) => {
  const maxWidthString =  'max-width:'
  const smallMobile = useMediaQueries(`${maxWidthString}${theme.breakpoint.smallMobile}`)
  const iPhone = useMediaQueries(`${maxWidthString}${theme.breakpoint.iPhone}`)
  const mobile = useMediaQueries(`${maxWidthString}${theme.breakpoint.mobile}`)
  const smallTablets = useMediaQueries(`${maxWidthString}${theme.breakpoint.smallTablets}`)
  const tablets = useMediaQueries(`${maxWidthString}${theme.breakpoint.tablets}`)
  const smallLaptops = useMediaQueries(`${maxWidthString}${theme.breakpoint.smallLaptops}`)
  const laptops = useMediaQueries(`${maxWidthString}${theme.breakpoint.laptops}`)
  const desktops = useMediaQueries(`${maxWidthString}${theme.breakpoint.desktops}`)

  const value = useMemo(() => (
    { smallMobile,iPhone,mobile, smallTablets, tablets, smallLaptops, laptops,desktops, }
  ), [smallMobile,iPhone,mobile, smallTablets, tablets, smallLaptops, laptops,desktops,])

  return <BreakpointsContext.Provider value = {value}>{children}</BreakpointsContext.Provider>
}