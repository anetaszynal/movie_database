import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import genresReducer, { GenreState } from './common/genre/genreSlice'
import topRatedMoviesReducer from './features/Movies/topRatedMoviesSlice'
import peopleReducer from './features/People/peopleSlice'
import movieDetailsReducer from './features/MovieDetails/movieDetailsSlice'
import personDetailsReducer from './features/PersonDetails/personDetailsSlice'
import { DetailsSliceState } from './common/DetailsPage/detailsSlice'
import { ListSliceState } from './common/ListPage/listSlice'

const sagaMiddleware = createSagaMiddleware()

export type StoreState = {
  genres: GenreState
  topRatedMovies: ListSliceState
  people: ListSliceState
  movieDetails: DetailsSliceState
  personDetails: DetailsSliceState
}

export type StoreBranches = keyof StoreState


export const store = configureStore({
  reducer: {
    genres: genresReducer,
    topRatedMovies: topRatedMoviesReducer,
    people: peopleReducer,
    movieDetails: movieDetailsReducer,
    personDetails: personDetailsReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(saga)