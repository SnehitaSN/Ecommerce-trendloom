
import {configureStore } from '@reduxjs/toolkit'
import cartSclice from './cartSclice'

export const store = configureStore({
  reducer:{
    cart:cartSclice,
  },
  devTools:true
})