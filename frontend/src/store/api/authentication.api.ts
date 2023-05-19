// packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAuthenticate, IRegister, IToken } from '../../types/authentication.type'

export const authenticationApi = createApi({
  reducerPath: 'api/authentication',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_VERSION + '/auth'
  }),
  endpoints: (build) => ({
    register: build.mutation<IToken, IRegister>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
        Headers: {
          Accept: 'application/json'
        }
      })
    }),
    authenticate: build.mutation<IToken, IAuthenticate>({
      query: (body) => ({
        url: '/authenticate',
        method: 'POST',
        body,
        Headers: {
          Accept: 'application/json'
        }
      })
    })
  })
})

export const { useRegisterMutation, useAuthenticateMutation } = authenticationApi
