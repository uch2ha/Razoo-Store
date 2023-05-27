// packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getTokenFromLS } from '../../utilities/localStorage'
import { ICreateOrder } from '../../features/checkuot/components/Checkout'

export type IAllUsersOrderData = {
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

type ICreatedOrderRes = {
  [key: string]: {
    [key: string]: number
  }
}

export const ordersApi = createApi({
  reducerPath: 'api/orders',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_VERSION
  }),
  endpoints: (build) => ({
    getAllMineOrders: build.query<IAllUsersOrderData[], void>({
      query: () => ({
        url: '/orders/mine',
        headers: {
          Authorization: `Bearer ${getTokenFromLS()}`
        }
      }),
      keepUnusedDataFor: 0
    }),
    getAllOrdersByUserId: build.query<IAllUsersOrderData[], string>({
      query: (userId) => ({
        url: `/orders/user/${userId}`,
        headers: {
          Authorization: `Bearer ${getTokenFromLS()}`
        }
      })
    }),
    createOrder: build.mutation<ICreatedOrderRes, ICreateOrder>({
      query: (body) => ({
        url: '/orders',
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${getTokenFromLS()}`
        }
      })
    })
  })
})

export const {
  useGetAllMineOrdersQuery,
  useCreateOrderMutation,
  useLazyGetAllOrdersByUserIdQuery
} = ordersApi
