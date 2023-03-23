import { IProduct } from '../../../models'
import { IFilters } from '../../../models/filters.interface'

export const useFilterProducts = (products: IProduct[], filters: IFilters) => {
  // remove all false filters
  const categoryFilters = Object.keys(filters.category).filter(function (x) {
    return filters.category[x] !== false
  })
  // remove all false filters
  const sizeFilters = Object.keys(filters.size).filter(function (x) {
    return filters.size[x] !== false
  })
  // if all filters are false, return untouched products list
  if (categoryFilters.length === 0 && sizeFilters.length === 0) return products

  const filterByCategory = (products: IProduct[]) => {
    return products.filter((product) => categoryFilters.includes(product.category))
  }
  const filterBySize = (products: IProduct[]) => {
    return products.filter((product) => sizeFilters.includes(product.size))
  }

  let result: IProduct[] = products

  if (categoryFilters.length !== 0) result = filterByCategory(result)
  if (sizeFilters.length !== 0) result = filterBySize(result)

  return result
}
