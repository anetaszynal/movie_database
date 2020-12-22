import { APP_ROUTES } from '../../lib/utils'

export const IMAGE_SIZES = {
  medium: 'w342',
  big: 'w1280',
}

const DEFAULT_IMAGE_SIZE = IMAGE_SIZES.medium

export const getImage = ({ path, size }) => {
  const availableSizesValues = Object.values(IMAGE_SIZES)
  const chosenSize = availableSizesValues.includes(size) ? size : DEFAULT_IMAGE_SIZE

  return path && `${APP_ROUTES.image}${chosenSize}${path}`
}