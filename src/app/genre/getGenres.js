import { fetchApi } from '../fetchApi'

export const getGenres = () => fetchApi({
  path: '/genre/movie/list',
})

console.log(getGenres)