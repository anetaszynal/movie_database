import { createSlice } from '@reduxjs/toolkit';

export const nameSlice = createSlice({
  name: 'name',
  initialState: null,
  reducers: {
    firstReducer: (state) => state
  },
});

export const {firstReducer} = nameSlice.actions;

export const selectInitial = state => state.initialState;

export default nameSlice.reducer;
