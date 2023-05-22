// packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types'
import { getTokenFromLS } from '../../utilities/localStorage'
import { useGetProductImg } from '../../hooks/useGetProductImg'
import { IServerProduct } from '../../features/admin/components/products/AdminProducts'

export const productsApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_VERSION
  }),
  endpoints: (build) => ({
    getAllProducts: build.query<IProduct[], void>({
      query: () => ({
        url: '/products'
      }),
      transformResponse: async (res: IProduct[]) => {
        const transformedProducts: Promise<IProduct>[] = res.map(async (product) => {
          try {
            const imgBlob = await useGetProductImg(product.productId)

            if (imgBlob) product.imgBlob = imgBlob
          } catch (error) {
            console.log(error)
          }

          return product
        })

        return Promise.all(transformedProducts)
      }
    }),
    saveProduct: build.mutation<IProduct, IServerProduct>({
      query: (body) => ({
        url: `/products`,
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${getTokenFromLS()}`,
          'Content-Type': 'application/json'
        }
      })
    }),
    editProduct: build.mutation<IProduct, IServerProduct>({
      query: (body) => ({
        url: `/products/${body.productId}`,
        method: 'PATCH',
        body,
        headers: {
          Authorization: `Bearer ${getTokenFromLS()}`,
          'Content-Type': 'application/json'
        }
      })
    }),
    deleteProduct: build.mutation<IProduct, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getTokenFromLS()}`,
          'Content-Type': 'application/json'
        }
      })
    }),
    getProductImage: build.query<any, void>({
      query: () => ({
        url: `/products/7d77ebf6-563a-4f2e-8bc3-3c9be0fb3c10/product-image`,
        headers: {
          Authorization: `Bearer ${getTokenFromLS()}`,
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain, */*'
        }
      })
    }),
    uploadProductImage: build.mutation<FormData, { productId: string; formData: FormData }>({
      query: (data) => ({
        url: `/products/${data.productId}/product-image`,
        method: 'POST',
        body: data.formData,
        headers: {
          Authorization: `Bearer ${getTokenFromLS()}`
        }
      })
    })
  })
})

export const {
  useGetAllProductsQuery,
  useEditProductMutation,
  useSaveProductMutation,
  useDeleteProductMutation,
  useUploadProductImageMutation,
  useGetProductImageQuery
} = productsApi
