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
    },
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.unshift(action.payload)
    },
    editProductById: (state, action: PayloadAction<IProduct>) => {
      state.forEach((product) => {
        if (product.id === action.payload.id) {
          product.id = action.payload.id
          product.name = action.payload.name
          product.description = action.payload.description
          product.instruction = action.payload.instruction
          product.category = action.payload.category
          product.size = action.payload.size
          product.price = action.payload.price
        }
      })
    },
    deleteProductById: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((product) => product.id === action.payload)
      state.splice(index, 1)
    }
  }
})

export const productsActions = productsSlice.actions
export const productsReducer = productsSlice.reducer
