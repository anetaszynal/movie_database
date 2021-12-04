import { all, call, delay, put, SagaReturnType, takeLatest } from 'redux-saga/effects'
import { getMovieCredits, getMovieDetails } from '../../features/MovieDetails/getMovieDetails'
import { actions as MovieActions } from '../../features/MovieDetails/movieDetailsSlice'
import { getPersonCredits, getPersonDetails } from '../../features/PersonDetails/getPersonDetails'
import { actions as PersonActions } from '../../features/PersonDetails/personDetailsSlice'

interface DetailsSaga {
  actions: typeof PersonActions | typeof MovieActions,
  getDetails: typeof getPersonDetails | typeof getMovieDetails,
  getCredits: typeof getPersonCredits | typeof getMovieCredits
}

type DetailsSagaResponse = SagaReturnType<typeof getPersonDetails | typeof getMovieDetails>
type CreditsSagaResponse =  SagaReturnType<typeof getPersonCredits | typeof getMovieCredits>

export function * detailsSaga ({ actions, getDetails, getCredits }: DetailsSaga) {
  function * fetchDetailsHandler ({ payload: id }: ReturnType<typeof actions.fetch>) {
    yield delay(200)

    try {
      const [detailsResponse, creditsResponse]: [DetailsSagaResponse, CreditsSagaResponse] = yield all([
        call(getDetails, { id: +id }),
        call(getCredits, { id: +id }),
      ])

      yield put(actions.fetchSuccess({
        details: detailsResponse,
        cast: creditsResponse.cast,
        crew: creditsResponse.crew
      }))
    } catch (e) {
      yield put(actions.fetchError())
    }
  }

  yield takeLatest(actions.fetch.type, fetchDetailsHandler)
}