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
import { filtersReducer } from './filters/filters.slice'
import { userReducer } from './user/user.slice'
import { cartReducer } from './cart/cart.slice'
import { productsReducer } from './products/products.slice'
import { productsApi } from './api/products.api'
import { authenticationApi } from './api/authentication.api'
import { oAuth2Google } from './api/oAuth2Google.api'
import { ordersApi } from './api/orders.api'
import { usersApi } from './api/users.api'

export const rootReducer = combineReducers({
  [authenticationApi.reducerPath]: authenticationApi.reducer,
  [oAuth2Google.reducerPath]: oAuth2Google.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  filters: filtersReducer,
  user: userReducer,
  cart: cartReducer,
  products: productsReducer
})

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart', 'filters', 'user']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
      .concat(authenticationApi.middleware)
      .concat(oAuth2Google.middleware)
      .concat(productsApi.middleware)
      .concat(ordersApi.middleware)
      .concat(usersApi.middleware)
})

export const persistor = persistStore(store)
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
