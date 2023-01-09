import { configureStore } from '@reduxjs/toolkit'
import authSilce from '../features/auth/authSilce'

export const store = configureStore({
  reducer: {
    auth: authSilce,
  },
})