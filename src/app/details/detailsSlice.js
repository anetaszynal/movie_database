import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../../lib/utils'

const initialState = {
  status: STATUS.initial,
}

export const createDetailsSlice = ({ name }) => {
  const slice = createSlice({
    name,
    initialState,

    reducers: {
      fetch: (_, { payload }) => (
        {
          status: STATUS.loading,
          payload,
        }
      ),
      fetchSuccess: (state, { payload: { details, crew, cast } }) => {
        state.status = STATUS.success
        state.details = details
        state.crew = crew
        state.cast = cast
      },
      fetchError: () => (
        { status: STATUS.error }
      )
    },
  })

  return {
    reducer: slice.reducer,
    actions: slice.actions,
    selectors: {
      selectStatus: state => state[name].status,
      selectDetail: state => state[name].detail,
      selectCast: state => state[name].cast,
      selectCrew: state => state[name].crew,
    }
  }
}