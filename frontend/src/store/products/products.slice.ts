// packages
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
//  types
import { IProduct } from '../../types'

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
        if (product.productId === action.payload.productId) {
          product.productId = action.payload.productId
          product.name = action.payload.name
          product.description = action.payload.description
          product.instruction = action.payload.instruction
          product.category = action.payload.category
          product.size = action.payload.size
          product.price = action.payload.price
          product.imgBlob = action.payload.imgBlob
        }
      })
    },
    deleteProductById: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((product) => product.productId === action.payload)
      state.splice(index, 1)
    }
  }
})

export const productsActions = productsSlice.actions
export const productsReducer = productsSlice.reducer
