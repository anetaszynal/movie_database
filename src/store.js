import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import saga from './saga'
import genresReducer from './app/genre/genreSlice';
import topRatedMoviesReducer from "./app/Movies/topRatedMoviesSlice";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    genres: genresReducer,
    topRatedMovies: topRatedMoviesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);