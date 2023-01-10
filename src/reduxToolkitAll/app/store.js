import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import apiSlice from '../api/apiSlice'
import authSilce from '../features/auth/authSilce'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSilce,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;