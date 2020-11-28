import { all } from "redux-saga/effects";
import { genresSaga } from './app/genre/genresSaga'

export default function* saga () {
  yield all([
    genresSaga(),
  ]);
};