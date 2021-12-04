import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../../lib/utils'
import { MovieCreditsCast, MovieCreditsCrew, PersonCreditsCast, PersonCreditsCrew } from '../../models/credits.model'
import { MovieDetails } from '../../models/movie.model'
import { PersonDetails } from '../../models/person.model'
import { StoreState } from '../../store'

type DetailsSliceBranches = 'personDetails' | 'movieDetails'

export type DetailsSliceState = {
  status: STATUS,
  details?: MovieDetails | PersonDetails,
  crew?: MovieCreditsCrew[] | PersonCreditsCrew[],
  cast?: MovieCreditsCast[] | PersonCreditsCast[]
}

const initialState: DetailsSliceState = {
  status: STATUS.initial,
}


export const createDetailsSlice = ({ name }: { name: DetailsSliceBranches}) => {
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
      ),
      clearAction: () => initialState,
    },
  })

  return {
    reducer: slice.reducer,
    actions: slice.actions,
    selectors: {
      selectStatus: (state: StoreState) => state[name].status,
      selectDetails: (state: StoreState) => state[name].details,
      selectCast: (state: StoreState) => state[name].cast,
      selectCrew: (state: StoreState) => state[name].crew,
    }
  }
}