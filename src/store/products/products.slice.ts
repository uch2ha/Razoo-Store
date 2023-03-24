// packages
import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../models'
// components
import DB from '../../../public/db.json'

const productsFromLS = JSON.parse(localStorage.getItem('products') ?? '[]')

// take the init state from LS if it exists
// if no take data from fake data DB

const initialState: IProduct[] = productsFromLS.length > 0 ? productsFromLS : DB.products

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})

export const productsActions = productsSlice.actions
export const productsReducer = productsSlice.reducer
