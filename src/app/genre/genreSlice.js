import { createSlice } from '@reduxjs/toolkit'

export const genresSlice = createSlice({
    name: 'genres',
    initialState: {
      status: 'initial',
    },
    reducers: {
      fetchGenres: () => ({
          status: 'loading',
        }),
      fetchGenresSuccess: (state, { payload: genres }) => {
          state.status = 'success';
          state.genres = genres;
        },
      fetchGenresError: () => ({
        status: 'error'
      }),
    },
  }
)

export const { fetchGenres, fetchGenresSuccess, fetchGenresError } = genresSlice.actions

export const selectGenres = state => state.genres

export default genresSlice.reducer
