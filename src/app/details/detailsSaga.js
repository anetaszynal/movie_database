import { all, call, put, takeLatest } from 'redux-saga/effects'

export function * detailsSaga ({ actions, getDetails, getCredits }) {
  function * fetchDetailsHandler ({ payload: id }) {
    try {
      const [detailsResponse, creditsResponse] = yield all([
        call(getDetails, {id}),
        call(getCredits, {id}),
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