import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../../types'
import { getTokenFromLS } from '../../utilities/localStorage'

export const usersApi = createApi({
  reducerPath: 'api/users',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_VERSION + '/users'
  }),
  endpoints: (build) => ({
    getAllUsers: build.query<IUser[], void>({
      query: () => ({
        url: '',
        headers: {
          Authorization: `Bearer ${getTokenFromLS()}`
        }
      })
    }),
    saveUser: build.mutation<IUser, IUser>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${getTokenFromLS()}`,
          'Content-Type': 'application/json'
        }
      })
    }),
    editUser: build.mutation<IUser, IUser>({
      query: (body) => ({
        url: `/${body.userId}`,
        method: 'PATCH',
        body,
        headers: {
          Authorization: `Bearer ${getTokenFromLS()}`,
          'Content-Type': 'application/json'
        }
      })
    }),
    deleteUser: build.mutation<IUser, string>({
      query: (productId) => ({
        url: `/${productId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getTokenFromLS()}`,
          'Content-Type': 'application/json'
        }
      })
    })
  })
})

export const {
  useGetAllUsersQuery,
  useEditUserMutation,
  useDeleteUserMutation,
  useSaveUserMutation
} = usersApi
