// packages
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models'

const initialState: IUser = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  isAdmin: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.id = action.payload.id
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.isAdmin = action.payload.isAdmin
    }
  }
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
