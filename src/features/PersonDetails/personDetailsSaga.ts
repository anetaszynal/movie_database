import { detailsSaga } from '../../common/DetailsPage/detailsSaga'
import { actions } from './personDetailsSlice'
import { getPersonCredits, getPersonDetails } from './getPersonDetails'

export function * personDetailsSaga () {
  yield detailsSaga({
    getDetails: getPersonDetails,
    getCredits: getPersonCredits,
    actions,
  })
}
