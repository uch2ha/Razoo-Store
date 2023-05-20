import { IOrderProduct } from '../../../types'

export const useCalculateTotalPrice = (products: IOrderProduct[]): number => {
  return products.reduce((sum, product) => sum + product.price * product.quantity, 0)
}
