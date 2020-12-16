import { APP_ROUTES } from '../../lib/utils'

export const sizes = {
  medium: 'w342',
  big: 'w1280',
}

export const getImage = ({ path, size }) =>
  path && `${APP_ROUTES.image}${sizes[size]}${path}`
