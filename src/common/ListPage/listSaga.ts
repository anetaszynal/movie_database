import { call, delay, put, SagaReturnType, takeLatest } from 'redux-saga/effects'
import { getSearchedMovies, getTopRatedMovies } from '../../features/Movies/getTopRatedMovies'
import { actions as MoviesActions } from '../../features/Movies/topRatedMoviesSlice'
import { getPeople, getSearchedPeople } from '../../features/People/getPeople'
import { actions as PeopleActions } from '../../features/People/peopleSlice'

interface ListSaga {
  actions: typeof MoviesActions | typeof PeopleActions,
  getPopular: typeof getTopRatedMovies | typeof getPeople,
  getSearched: typeof getSearchedMovies | typeof getSearchedPeople
}

type ListSagaResponse = SagaReturnType<typeof getTopRatedMovies | typeof getPeople | typeof getSearchedMovies | typeof getSearchedPeople>

export function * listSaga ({ actions, getPopular, getSearched }: ListSaga) {
  function * fetchListHandler ({ payload: { query, page } }: ReturnType<typeof actions.fetch>) {
    yield delay(200)

    try {
      const respone: ListSagaResponse = yield(
        query?.trim()
          ? call(getSearched, { page, query })
          : call(getPopular, { page })
      )
      yield put(actions.fetchSuccess({
        results: respone.results,
        pagination: {
          page: respone.page,
          total_pages: respone.total_pages,
          total_results: respone.total_results,
        }
      }))
    } catch (error) {
      yield put(actions.fetchError())
    }
  }

  yield takeLatest(actions.fetch.type, fetchListHandler)
}