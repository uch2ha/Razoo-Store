// packages
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICurrentUser } from '../../models/currentUser'

const initialState: ICurrentUser = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  isAdmin: false
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<ICurrentUser>) => {
      state.id = action.payload.id
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.isAdmin = action.payload.isAdmin
    }
  }
})

export const currentUserActions = currentUserSlice.actions
export const currentUserReducer = currentUserSlice.reducer
