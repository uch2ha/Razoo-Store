// packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types'
import { getTokenFromLS } from '../../utilities/localStorage'

const token = getTokenFromLS()

export const productsApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_VERSION
  }),
  endpoints: (build) => ({
    getAllProducts: build.query<IProduct[], void>({
      query: () => ({
        url: '/products',
        headers: {
          'Access-Control-Allow-Origin': 'http://16.16.91.123:5173'
        }
      })
    }),
    saveProduct: build.mutation<IProduct, IProduct>({
      query: (body) => ({
        url: `/products`,
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
    }),
    editProduct: build.mutation<IProduct, IProduct>({
      query: (body) => ({
        url: `/products/${body.productId}`,
        method: 'PATCH',
        body,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
    }),
    deleteProduct: build.mutation<IProduct, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
    })
  })
})

export const {
  useGetAllProductsQuery,
  useEditProductMutation,
  useSaveProductMutation,
  useDeleteProductMutation
} = productsApi
