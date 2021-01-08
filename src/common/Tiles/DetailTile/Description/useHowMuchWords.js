import { useBreakpoints } from './useBreakpoints'

export const useHowMuchWords = () => {
  const { smallMobile, iPhone, mobile, smallTablets, tablets, smallLaptops, laptops, desktops } = useBreakpoints()

  const howMuchWords = () => {
    const screenWidth = window.innerWidth
    const textWidth = (availableSpace, otherElementsWidth, line) =>
      Math.floor((availableSpace - otherElementsWidth) / line)
    const desktopElementsWidth = 16 * 2 + 64 * 3 + 310
    const mobileElementsWidth = 64
    if (!desktops) {
      return textWidth(1400, desktopElementsWidth, 7)
    }
    else if (!laptops || !smallLaptops) {
      return textWidth(screenWidth, desktopElementsWidth, 7)
    }
    else if (!tablets) {
      return textWidth(screenWidth, desktopElementsWidth, 10)
    }
    else if (!smallTablets || !iPhone || !smallMobile) {
      return textWidth(screenWidth, mobileElementsWidth, 10)
    }
    else if (!mobile) {
      return textWidth(screenWidth, mobileElementsWidth, 12)
    }
    else {
      return textWidth(screenWidth, mobileElementsWidth, 12)
    }
  }
  return howMuchWords()
}