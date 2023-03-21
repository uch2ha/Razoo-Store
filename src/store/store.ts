import { configureStore } from '@reduxjs/toolkit'
import { dbApi } from './DB/db.api'
import { UIReducer } from './UI/UI.slice'
import { productsReducer } from './products/products.slice'

export const store = configureStore({
  reducer: {
    [dbApi.reducerPath]: dbApi.reducer,
    UI: UIReducer,
    products: productsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dbApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
