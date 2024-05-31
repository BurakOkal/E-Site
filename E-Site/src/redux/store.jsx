import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import productsReducer from './slices/productsSlice'
import basketReducer from './slices/basketSlice'

export const store = configureStore({
  reducer: {
    app : appReducer,
    products : productsReducer,
    basket : basketReducer
  },
})