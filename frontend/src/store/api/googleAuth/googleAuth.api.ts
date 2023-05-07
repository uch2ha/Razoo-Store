// packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const googleAuthApi = createApi({
  reducerPath: 'googleAuth/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/oauth2/v1/'
  }),
  endpoints: (build) => ({
    getUser: build.query<any, any>({
      query: (token) => ({
        url: `userinfo?access_token=${token}`,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
        }
      })
    })
  })
})

export const { useLazyGetUserQuery, useGetUserQuery } = googleAuthApi
