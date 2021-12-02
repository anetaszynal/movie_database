import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../../lib/utils'
import { Genre } from '../../models/genre.model'
import { StoreState } from '../../store'

export type GenreState = {
  status: STATUS
  genres: Genre[]
}

const initialState: GenreState = {
  status: STATUS.initial,
  genres: []
}

export const genresSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
      fetchGenres: (state) => {
          state.status =STATUS.loading
        },
      fetchGenresSuccess: (state, { payload: genres }: any) => {
        state.status = STATUS.success
        state.genres = genres
      },
      fetchGenresError: (state) => {
        state.status =STATUS.error
      }
    },
  }
)

export const { fetchGenres, fetchGenresSuccess, fetchGenresError } = genresSlice.actions

export const selectGenres = (state: StoreState) => state.genres.genres

export default genresSlice.reducer
