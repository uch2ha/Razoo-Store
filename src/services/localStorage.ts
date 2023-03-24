import { IUser } from '../models'
import { IFilters } from '../models/filters.type'
import { IDb } from '../store/DB/db.api'

export const initLocalStorage = (data: IDb) => {
  //set all fixed data to LS, while first loading
  localStorage.setItem('users', JSON.stringify(data.users))
  localStorage.setItem('products', JSON.stringify(data.products))
  localStorage.setItem('orders', JSON.stringify(data.orders))
}

// FILTERS
export const setFiltersDataToLS = (
  filters: IFilters,
  categoriesIsVisible: boolean,
  sizeIsVisible: boolean
): void => {
  const filtersData = { filters, categoriesIsVisible, sizeIsVisible }
  localStorage.setItem('filtersData', JSON.stringify(filtersData))
}

export const getFiltersDataFromLS = (): {
  filters: IFilters
  categoriesIsVisible: boolean
  sizeIsVisible: boolean
} => {
  const filtersData = localStorage.getItem('filtersData')
  return JSON.parse(filtersData ?? '{}')
}

// LOGIN
// export const setFiltersDataToLS = (
//   filters: IFilters,
//   categoriesIsVisible: boolean,
//   sizeIsVisible: boolean
// ): void => {
//   const filtersData = { filters, categoriesIsVisible, sizeIsVisible }
//   localStorage.setItem('filtersData', JSON.stringify(filtersData))
// }

export const getUsersFromLS = (): IUser[] => {
  const users = localStorage.getItem('users')
  return JSON.parse(users ?? '[]')
}
