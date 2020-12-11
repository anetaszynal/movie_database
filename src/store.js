import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import saga from './saga'
import genresReducer from './app/genre/genreSlice';
import topRatedMoviesReducer from "./app/Movies/topRatedMoviesSlice";
import peopleReducer from "./app/People/peopleSlice";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    genres: genresReducer,
    topRatedMovies: topRatedMoviesReducer,
    people: peopleReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);