import { call, delay, put, takeLatest } from 'redux-saga/effects'

export function * listSaga ({ actions, getPopular, getSearched }) {
  function * fetchListHandler ({ payload: { query, page } }) {
    yield delay(200)

    try {
      const respone = yield(
        query?.trim()
          ? call(getSearched, { page, query })
          : call(getPopular, { page })
      )
      yield put(actions.fetchSuccess({
        results: respone.results,
        pagination: {
          page: respone.page,
          totalPages: respone.total_pages,
          totalResults: respone.total_results,
        }
      }))
    } catch (error) {
      yield put(actions.fetchError())
    }
  }

  yield takeLatest(actions.fetch.type, fetchListHandler)
}