import { fetchApi } from '../fetchApi'
import { APP_ROUTES } from '../../lib/utils'
import { Movies } from '../../models/movie.model'

export const getTopRatedMovies = ({ page }: {page: number}) => fetchApi<Movies>({
  path: APP_ROUTES.movies,
  parameters: {
    page,
  }
})

export const getSearchedMovies = ({ page, query }: {page: number, query: string}) => fetchApi<Movies>({
  path: APP_ROUTES.searchMovies,
  parameters: {
    page,
    query,
  }
})