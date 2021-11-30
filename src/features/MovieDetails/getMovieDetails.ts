import { fetchApi } from '../fetchApi'
import { APP_ROUTES } from '../../lib/utils'
import { MovieCredits, MovieDetails } from '../../models/movie.model'

export const getMovieDetails = ({ id }: {id: number}) =>
  fetchApi<MovieDetails[]>({
    path: `${APP_ROUTES.movieDetails}/${id}`,
  })

export const getMovieCredits = ({ id }: {id: number}) =>
  fetchApi<MovieCredits>({
    path: `${APP_ROUTES.movieDetails}/${id}/${APP_ROUTES.movieCredits}`,
  })
