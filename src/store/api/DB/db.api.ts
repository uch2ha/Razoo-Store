// packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IOrder } from '../../../types/order.type'
import { IUser } from '../../../types/user.type'
import { IProduct } from '../../../types/product.type'
// components

export type IDb = { users: IUser[]; orders: IOrder[]; products: IProduct[] }

export const dbApi = createApi({
  reducerPath: 'db/api',
  baseQuery: fetchBaseQuery({
    baseUrl: '../../../public/'
  }),
  endpoints: (build) => ({
    getAllData: build.query<IDb, void>({
      query: () => ({
        url: 'db.json'
      })
    })
  })
})

export const { useGetAllDataQuery } = dbApi
