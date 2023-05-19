// packages
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// types
import { IUser } from '../../types'

const initialState: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  role: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<IUser>) => {
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.role = action.payload.role
    },
    logOut: (state) => {
      state.email = initialState.email
      state.firstName = initialState.firstName
      state.lastName = initialState.lastName
      state.role = initialState.role
    },
    changeFirstLastName: (
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>
    ) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    }
  }
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
