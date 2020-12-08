import { fetchApi } from '../fetchApi'

export const getTopRatedMovies = ({ page }) => fetchApi({
  path: '/movie/top_rated',
  parameters: {
    page,
  }
})