// packages
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../types/user.type'

const initialState: IUser = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  isGoogleLogin: null,
  isAdmin: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<IUser>) => {
      state.id = action.payload.id
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.isAdmin = action.payload.isAdmin
      state.isGoogleLogin = action.payload.isGoogleLogin
    },
    logOut: (state) => {
      state.id = initialState.id
      state.email = initialState.email
      state.firstName = initialState.firstName
      state.lastName = initialState.lastName
      state.isAdmin = initialState.isAdmin
      state.isGoogleLogin = initialState.isGoogleLogin
    }
  }
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
