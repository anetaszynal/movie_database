import { fetchApi } from '../fetchApi'
import { APP_ROUTES } from '../../lib/utils'

export const getGenres = () => fetchApi({
  path: APP_ROUTES.genres,
})