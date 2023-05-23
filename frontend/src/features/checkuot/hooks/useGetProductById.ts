import { useEffect, useState } from 'react'
import { useGetProductByIdQuery } from '../../../store/api/products.api'
import { IProduct } from '../../../types'

export const useGetProductById = (productId: string): IProduct | null => {
  const [product, setProduct] = useState<IProduct>()
  const { data, isLoading, isError, error } = useGetProductByIdQuery(productId)

  useEffect(() => {
    if (data) setProduct(data)
  }, [isLoading])

  if (product) return product

  return null
}
