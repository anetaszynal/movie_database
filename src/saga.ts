import { all } from 'redux-saga/effects'
import { genresSaga } from './common/genre/genresSaga'
import { topRatedMoviesSaga } from './features/Movies/topRatedMoviesSaga'
import { peopleSaga } from './features/People/peopleSaga'
import { movieDetailsSaga } from './features/MovieDetails/movieDetailsSaga'
import { personDetailsSaga } from './features/PersonDetails/personDetailsSaga'

export default function * saga () {
  yield all([
    genresSaga(),
    topRatedMoviesSaga(),
    peopleSaga(),
    movieDetailsSaga(),
    personDetailsSaga(),
  ])
}
