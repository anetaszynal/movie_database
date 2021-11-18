import { fetchApi } from '../../features/fetchApi'
import { APP_ROUTES } from '../../lib/utils'
import { GenresResponse } from '../../models/genre.model'

export const getGenres = () => fetchApi<GenresResponse>({
  path: APP_ROUTES.genres,
})