import { IDb } from '../store/api/DB/db.api'
import { IProduct } from '../types/product.type'

export const initLocalStorage = (data: IDb) => {
  //set all fixed data to LS, while first loading
  localStorage.setItem('users', JSON.stringify(data.users))
  localStorage.setItem('products', JSON.stringify(data.products))
  localStorage.setItem('orders', JSON.stringify(data.orders))
}

// PRODUCTS --------------------------------
export const getAllProductsFromLS = (): IProduct[] => {
  return JSON.parse(localStorage.getItem('products') ?? '[]')
}
