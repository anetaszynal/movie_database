import { listSaga } from '../../common/ListPage/listSaga'
import { getSearchedMovies, getTopRatedMovies } from './getTopRatedMovies'
import { actions } from './topRatedMoviesSlice'

export function * topRatedMoviesSaga () {
  yield listSaga({
    getPopular: getTopRatedMovies,
    getSearched: getSearchedMovies,
    actions,
  })
}