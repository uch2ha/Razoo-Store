// packages
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IToken } from '../../types/authentication.type'
import { IGoogleUser } from '../../features/logInSignUp/types/googleUser.type'

export type IAccessToken = Pick<IGoogleUser, 'access_token'>

export const oAuth2Google = createApi({
  reducerPath: 'api/oAuth2Google',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_VERSION + '/oauth2'
  }),
  endpoints: (build) => ({
    oAuth2Authenticate: build.mutation<IToken, IAccessToken>({
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

export const { useOAuth2AuthenticateMutation } = oAuth2Google
