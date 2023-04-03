import { IProduct } from '../../../types'

export const usePaginate = (products: IProduct[], currentPage: number) => {
  const limitPerPage = 12
  const offset = (currentPage - 1) * limitPerPage
  const lastElement = offset + limitPerPage

  const result = products.slice(offset, lastElement)

  return result
}
