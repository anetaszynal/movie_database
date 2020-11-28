import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import saga from './saga'
import genresReducer from './app/genre/genreSlice';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    genres: genresReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);