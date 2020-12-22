import { createDetailsSlice } from '../../common/DetailsPage/detailsSlice'

export const personDetailsSlice = createDetailsSlice({
  name: 'personDetails',
})

export const { actions, selectors } = personDetailsSlice

export default personDetailsSlice.reducer