import { configureStore } from '@reduxjs/toolkit'
import { dbApi } from './DB/db.api'

export const store = configureStore({
  reducer: {
    [dbApi.reducerPath]: dbApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dbApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
