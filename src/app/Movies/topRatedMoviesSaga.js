import { listSaga } from '../topRatedList/listSaga';
import { getTopRatedMovies } from './getTopRatedMovies';
import {actions} from './topRatedMoviesSlice';

export function* topRatedMoviesSaga() {
  yield listSaga({
    getPopular: getTopRatedMovies,
    actions,
  })
}