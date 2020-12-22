import { fetchApi } from '../fetchApi'
import { APP_ROUTES } from '../../lib/utils'

export const getMovieDetails = ({ id }) =>
  fetchApi({
    path: `${APP_ROUTES.movieDetails}/${id}`,
  })

export const getMovieCredits = ({ id }) =>
  fetchApi({
    path: `${APP_ROUTES.movieDetails}/${id}/${APP_ROUTES.movieCredits}`,
  })
