import { all, call, delay, put, takeLatest } from 'redux-saga/effects'

export function * detailsSaga ({ actions, getDetails, getCredits }: {actions: any, getDetails: any, getCredits:any}) {
  function * fetchDetailsHandler ({ payload: id }: {payload: string}) {
    yield delay(200)

    try {
      console.log('saga', id, typeof id)
      const [detailsResponse, creditsResponse] = yield all([
        call(getDetails, { id }),
        call(getCredits, { id }),
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