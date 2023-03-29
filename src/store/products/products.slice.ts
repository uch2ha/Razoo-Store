// packages
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../types/product.type'

const initialState: IProduct[] = []

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<IProduct[]>) => {
      if (state.length === 0) state.push(...action.payload)
    }
  }
})

export const productsActions = productsSlice.actions
export const productsReducer = productsSlice.reducer
