import { detailsSaga } from '../details/detailsSaga'
import {actions} from './movieDetailsSlice'
import { getMovieCredits, getMovieDetails } from './getMovieDetails'

export function* movieDetailsSaga () {
  yield detailsSaga({
    getDetails: getMovieDetails,
    getCredits: getMovieCredits,
    actions,
  })
}