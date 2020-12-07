import { createListSlice } from '../topRatedList/listSlice'

export const  topRatedMoviesSlice = createListSlice({
  name: "topRatedMovies",
})

export const {actions, selectors} = topRatedMoviesSlice

export default topRatedMoviesSlice.reducer