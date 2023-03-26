// packages
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models'
import { getUsersFromLS } from '../../features/logIn-signUp/services/localStorage'

const initialState: IUser = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  isAdmin: false
}

console.log('slice')
getUsersFromLS()

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
    },
    logOut: (state) => {
      state.id = initialState.id
      state.email = initialState.email
      state.firstName = initialState.firstName
      state.lastName = initialState.lastName
      state.isAdmin = initialState.isAdmin
    }
  }
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
