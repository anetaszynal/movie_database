import { createDetailsSlice } from '../details/detailsSlice'

export const movieDetailsSlice = createDetailsSlice({
  name: "movieDetails"
})

export const {actions, selectors} = movieDetailsSlice

export default movieDetailsSlice.reducer