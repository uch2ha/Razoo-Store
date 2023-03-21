import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dbApi = createApi({
  reducerPath: 'db/api',
  baseQuery: fetchBaseQuery({
    baseUrl: '../../../public/'
  }),
  endpoints: (build) => ({
    getAllData: build.query<any, void>({
      query: () => ({
        url: 'db.json'
      })
    })
  })
})

export const { useGetAllDataQuery } = dbApi
