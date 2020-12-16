import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchGenres, fetchGenresError, fetchGenresSuccess } from './genreSlice'
import { getGenres } from './getGenres'
import { convertArrayToObject } from './convertArrayToObject'

function * fetchGenreHandler () {
  try {
    const genres = yield call(getGenres)
    yield put(fetchGenresSuccess(convertArrayToObject(genres.genres)))
  } catch (error) {
    yield put(fetchGenresError(error))
  }
}

export function * genresSaga () {
  yield takeLatest(fetchGenres().type, fetchGenreHandler)
}