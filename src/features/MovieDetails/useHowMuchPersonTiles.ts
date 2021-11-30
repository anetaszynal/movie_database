import { useBreakpoints } from '../../common/useBreakpoints'

export const useHowMuchPersonTiles = () => {
  const {tablets, personFirstBreakpoint, personSecondBreakpoint, personThirdBreakpoint, personFourthBreakpoint, personFifthBreakpoint,personSixthBreakpoint} = useBreakpoints()
  if (!personFirstBreakpoint) {
    return 6
  }
  else if (!personSecondBreakpoint) {
    return 5
  }
  else if (!personThirdBreakpoint) {
    return 4
  }
  else if (!tablets) {
    return 3
  }
  else if (!personFourthBreakpoint) {
    return 4
  }
  else if (!personFifthBreakpoint) {
    return 3
  }
  else if (!personSixthBreakpoint) {
    return 2
  }
  else {
    return 1
  }
}