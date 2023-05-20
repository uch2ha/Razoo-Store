// packages
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// components
import { ICartItem } from '../../features/cart/types/cart.type'

const initialState: ICartItem[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ id: string; price: number }>) => {
      const isExist = state.some((item) => {
        if (item.productId === action.payload.id) {
          item.amount++
          return true
        }
      })

      if (!isExist) {
        state.push({
          productId: action.payload.id,
          productPrice: action.payload.price,
          amount: 1
        })
      }
    },
    increaseItemAmount: (state, action: PayloadAction<any>) => {
      state.forEach((item) => {
        if (item.productId === action.payload) {
          item.amount++
        }
      })
    },
    decreaseItemAmount: (state, action: PayloadAction<any>) => {
      state.forEach((item) => {
        if (item.productId === action.payload) {
          if (item.amount !== 1) item.amount--
        }
      })
    },
    removeItem: (state, action: PayloadAction<any>) => {
      const index = state.findIndex((item) => item.productId === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
    clearCart: (state) => {
      while (state.length > 0) {
        state.pop()
      }
    }
  }
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer