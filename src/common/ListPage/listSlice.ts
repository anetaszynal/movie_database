import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../../lib/utils'
import { StoreState } from '../../store'

type ListStoreBranches = 'topRatedMovies' | 'people'

export type ListSliceState = {
  status: STATUS
  results?: any
  pagination?: any
  query?: string
}

const initialState: ListSliceState = {
  status: STATUS.initial,
}

export const createListSlice = ({ name }: { name: ListStoreBranches }) => {
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
  const selectResults = (state: StoreState) => state[name].results

  return {
    reducer: slice.reducer,
    actions: slice.actions,
    selectors: {
      selectResults,
      selectStatus: (state: StoreState) => state[name].status,
      selectQuery: (state: StoreState) => state[name].query,
      selectPagination: (state: StoreState) => state[name].pagination,
      selectResultsEmpty: (state: StoreState) => selectResults(state)?.length === 0,
    },
  }
}
