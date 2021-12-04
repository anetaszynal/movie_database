import { call, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import {
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
} from "./genreSlice";
import { getGenres } from "./getGenres";
import { convertArrayToObject } from "./convertArrayToObject";

type GenresResponse = SagaReturnType<typeof getGenres>

function* fetchGenreHandler() {
  try {
    const genres:GenresResponse = yield call(getGenres);
    yield put(fetchGenresSuccess(convertArrayToObject(genres.genres)));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* genresSaga() {
  yield takeLatest(fetchGenres().type, fetchGenreHandler);
}
