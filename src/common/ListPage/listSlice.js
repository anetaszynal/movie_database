import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../../lib/utils'

const initialState = {
  status: STATUS.initial,
}

export const createListSlice = ({ name }) => {
  const slice = createSlice({
    name,
    initialState,
    reducers: {
      fetch: (_, { payload: { query } }) => (
        {
          status: STATUS.loading,
          query,
        }
      ),
      fetchSuccess: (state, { payload: { results, pagination } }) => {
        state.status = STATUS.success
        state.results = results
        state.pagination = pagination
      },
      fetchError: () => (
        {
          status: STATUS.error,
        }
      ),
      clearAction: () => initialState,
    },
  })
  const selectResults = (state) => state[name].results

  return {
    reducer: slice.reducer,
    actions: slice.actions,
    selectors: {
      selectResults,
      selectStatus: (state) => state[name].status,
      selectQuery: (state) => state[name].query,
      selectPagination: (state) => state[name].pagination,
      selectResultsEmpty: (state) => selectResults(state)?.length === 0,
    },
  }
}
