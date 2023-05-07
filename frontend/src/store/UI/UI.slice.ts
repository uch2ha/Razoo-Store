import { createSlice } from '@reduxjs/toolkit'

type UIState = {
  isDark: boolean
}

const initialState: UIState = {
  isDark: false
}

export const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    changeTheme(state) {
      state.isDark = !state.isDark
    }
  }
})

export const UIActions = UISlice.actions
export const UIReducer = UISlice.reducer
