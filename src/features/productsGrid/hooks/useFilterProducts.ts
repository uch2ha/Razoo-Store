import { IProduct } from '../../../models'
import { IFilters } from '../../../models/filters.type'

export const useFilterProducts = (products: IProduct[], filters: IFilters) => {
  // remove all false filters
  const categoryFilters = Object.keys(filters.category).filter(function (x) {
    return filters.category[x] !== false
  })
  // remove all false filters
  const sizeFilters = Object.keys(filters.size).filter(function (x) {
    return filters.size[x] !== false
  })

  // sort by functionality
  const filterSortBy = (products: IProduct[]): IProduct[] => {
    if (filters.sortBy === null) return products
    if (filters.sortBy === 'HP') return [...products].sort((a, b) => b.price - a.price)
    if (filters.sortBy === 'LP') return [...products].sort((a, b) => a.price - b.price)
    if (filters.sortBy === 'AZ') return [...products].sort((a, b) => a.name.localeCompare(b.name))
    if (filters.sortBy === 'ZA') return [...products].sort((a, b) => b.name.localeCompare(a.name))
    return products
  }

  // if all filters are false, return untouched products list
  if (categoryFilters.length === 0 && sizeFilters.length === 0) return filterSortBy(products)

  const filterByCategory = (products: IProduct[]) => {
    return products.filter((product) => categoryFilters.includes(product.category))
  }
  const filterBySize = (products: IProduct[]) => {
    return products.filter((product) => sizeFilters.includes(product.size))
  }

  let result: IProduct[] = products

  if (categoryFilters.length !== 0) result = filterByCategory(result)
  if (sizeFilters.length !== 0) result = filterBySize(result)

  return filterSortBy(result)
}
