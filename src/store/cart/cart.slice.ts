// packages
import { createSlice } from '@reduxjs/toolkit'
import { ICart } from '../../features/cart/types/cart.type'
// components

const initialState: ICart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
