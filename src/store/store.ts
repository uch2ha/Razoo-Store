import { configureStore } from '@reduxjs/toolkit'
import { dbApi } from './DB/db.api'
import { UIReducer } from './UI/UI.slice'
import { productsReducer } from './products/products.slice'
import { filtersReducer } from './filters/filters.slice'
import { userReducer } from './user/user.slice'

export const store = configureStore({
  reducer: {
    [dbApi.reducerPath]: dbApi.reducer,
    UI: UIReducer,
    products: productsReducer,
    filters: filtersReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dbApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
