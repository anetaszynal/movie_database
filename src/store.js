import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import genresReducer from './common/genre/genreSlice'
import topRatedMoviesReducer from './features/Movies/topRatedMoviesSlice'
import peopleReducer from './features/People/peopleSlice'
import movieDetailsReducer from './features/MovieDetails/movieDetailsSlice'
import personDetailsReducer from './features/PersonDetails/personDetailsSlice'

const sagaMiddleware = createSagaMiddleware()

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
