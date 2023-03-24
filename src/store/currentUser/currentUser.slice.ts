// packages
import { createSlice } from '@reduxjs/toolkit'
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
  reducers: {}
})

export const currentUserActions = currentUserSlice.actions
export const currentUserReducer = currentUserSlice.reducer
