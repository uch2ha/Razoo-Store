// packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// components
import { IUser, IOrder, IProduct } from '../../../types'

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
