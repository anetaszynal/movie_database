import { useBreakpoints } from '../../common/useBreakpoints'

export const useHowMuchMovieTiles = () => {
  const {tablets, movieFirstBreakpoint, movieSecondBreakpoint, movieThirdBreakpoint} = useBreakpoints()
  if (!movieFirstBreakpoint) {
    return 4
  }
  else if (!movieSecondBreakpoint) {
    return 3
  }
  else if (!movieThirdBreakpoint || !tablets) {
    return 2
  }
  else {
    return 1
  }
}