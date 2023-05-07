// packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// types
import { IOrder } from '../../../types'
import { IUser } from '../../../types'
import { IProduct } from '../../../types'

export type IDb = { users: IUser[]; orders: IOrder[]; products: IProduct[] }

export const dbApi = createApi({
  reducerPath: 'db/api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
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
