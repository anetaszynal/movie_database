import { createDetailsSlice } from '../details/detailsSlice'

export const personDetailsSlice = createDetailsSlice({
  name: "personDetails",
})

export const {actions, selectors} = personDetailsSlice

export default personDetailsSlice.reducer