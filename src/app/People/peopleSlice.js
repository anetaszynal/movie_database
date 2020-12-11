import { createListSlice } from '../topRatedList/listSlice'

export const  peopleSlice = createListSlice({
  name: "people",
})

export const {actions, selectors} = peopleSlice

export default peopleSlice.reducer