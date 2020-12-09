import { fetchApi } from '../fetchApi'

export const getTopRatedMovies = ({ page }) => fetchApi({
  path: '/movie/top_rated',
  parameters: {
    page,
  }
})

export const getSearchedMovies = ({ page, query }) => fetchApi({
  path: '/search/movie',
  parameters: {
    page,
    query,
  }
})