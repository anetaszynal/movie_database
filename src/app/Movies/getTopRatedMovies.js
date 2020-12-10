import { fetchApi } from '../fetchApi'
import { APP_ROUTES } from '../../lib/utils'

export const getTopRatedMovies = ({ page }) => fetchApi({
  path: APP_ROUTES.movies,
  parameters: {
    page,
  }
})

export const getSearchedMovies = ({ page, query }) => fetchApi({
  path: APP_ROUTES.searchMovies,
  parameters: {
    page,
    query,
  }
})