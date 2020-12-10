import { all } from 'redux-saga/effects'
import { genresSaga } from './app/genre/genresSaga'
import { topRatedMoviesSaga } from './app/Movies/topRatedMoviesSaga'
import { peopleSaga } from './app/People/peopleSaga'

export default function * saga () {
  yield all([
    genresSaga(),
    topRatedMoviesSaga(),
    peopleSaga(),
  ])
};