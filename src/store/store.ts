// packages
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// components
import { dbApi } from './api/DB/db.api'
import { UIReducer } from './UI/UI.slice'
import { filtersReducer } from './filters/filters.slice'
import { userReducer } from './user/user.slice'
import { googleAuthApi } from './api/googleAuth/googleAuth.api'
import { cartReducer } from './cart/cart.slice'
import { productsReducer } from './products/products.slice'

const rootReducer = combineReducers({
  [dbApi.reducerPath]: dbApi.reducer,
  [googleAuthApi.reducerPath]: googleAuthApi.reducer,
  UI: UIReducer,
  filters: filtersReducer,
  user: userReducer,
  cart: cartReducer,
  products: productsReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
      .concat(dbApi.middleware)
      .concat(googleAuthApi.middleware)
})

export const persistor = persistStore(store)
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
