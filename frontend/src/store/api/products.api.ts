// packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types'

export const productsApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_VERSION
  }),
  endpoints: (build) => ({
    getAllProducts: build.query<IProduct[], void>({
      query: () => ({
        url: '/products'
      })
    })
  })
})

export const { useGetAllProductsQuery } = productsApi
