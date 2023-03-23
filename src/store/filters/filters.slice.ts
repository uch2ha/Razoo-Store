// packages
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// components
import { IFilters } from '../../models/filters.interface'

const initialState: IFilters = {
  category: { shampoo: false, hairConditioner: false, hairMask: false, hairOil: false },
  size: { '10ml': false, '25ml': false, '50ml': false, '100ml': false },
  sortBy: null
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleCategory: (
      state,
      action: PayloadAction<{ name: string; filter: 'category' | 'size' }>
    ) => {
      const filter = action.payload.filter
      const name = action.payload.name
      state[filter][name] = !state[filter][name]
    },
    toggleReset: (state) => {
      state.size = initialState.size
      state.category = initialState.category
    },
    setSortBy: (state, action: PayloadAction<'HP' | 'LP' | 'AZ' | 'ZA'>) => {
      if (state.sortBy === action.payload) {
        state.sortBy = null
      } else {
        state.sortBy = action.payload
      }
    },
    applyFiltersData: (state, action: PayloadAction<IFilters>) => {
      const newFilters = action.payload
      state.category = newFilters.category
      state.size = newFilters.size
      state.sortBy = newFilters.sortBy
    }
  }
})

export const filtersActions = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer
