import { fetchApi } from '../fetchApi'

export const getTopRatedMovies = ({path}) => fetchApi({
  path: "/movie/top_rated"
})