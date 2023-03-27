// packages
import { createSlice } from '@reduxjs/toolkit'
import { ICart } from '../../features/cart/types/cart.type'
import { IProduct } from '../../types/product.type'
// components

const cartFromLS = JSON.parse(localStorage.getItem('cart') ?? '[]')

// take the init state from LS if it exists
// if no take data from fake data DB

const initialState: ICart[] = cartFromLS.length > 0 ? cartFromLS : []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
