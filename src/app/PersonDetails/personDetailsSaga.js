import { detailsSaga } from '../details/detailsSaga'
import { actions } from './personDetailsSlice'
import { getPersonCredits, getPersonDetails } from './getPersonDetails'

export function * personDetailsSaga () {
  yield detailsSaga({
    getDetails: getPersonDetails,
    getCredits: getPersonCredits,
    actions,
  })
}