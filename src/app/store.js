import { configureStore } from '@reduxjs/toolkit';
import nameReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    name: nameReducer,
  },
});
