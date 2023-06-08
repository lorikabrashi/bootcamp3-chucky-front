import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: {
    auth: authSlice
   },
   middleware: [thunk]
})