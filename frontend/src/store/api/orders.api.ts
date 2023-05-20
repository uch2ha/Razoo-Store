// packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getTokenFromLS } from '../../utilities/localStorage'

export type IMineOrderData = {
  orderId: string
  status: 'IN_PROCESS' | 'IN_TRANSIT' | 'DELIVERED' | 'REJECTED'
  createdAt: string
  productId: string
  productName: string
  productImage: string
  productSize: '50ml' | '100ml' | '150ml' | '200ml'
  productPrice: number
  productQuantity: number
}

const token = getTokenFromLS()

export const ordersApi = createApi({
  reducerPath: 'api/orders',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_VERSION
  }),
  endpoints: (build) => ({
    getAllMineOrders: build.query<IMineOrderData[], void>({
      query: () => ({
        url: '/orders/mine',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
})

export const { useGetAllMineOrdersQuery } = ordersApi
