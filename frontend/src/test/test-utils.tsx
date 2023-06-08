import { cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { afterEach } from 'vitest'
import store, { rootReducer } from '../store/store'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { mockProducts } from './mockProducts'
import { authenticationApi } from '../store/api/authentication.api'
import { oAuth2Google } from '../store/api/oAuth2Google.api'
import { productsApi } from '../store/api/products.api'
import { ordersApi } from '../store/api/orders.api'
import { usersApi } from '../store/api/users.api'

afterEach(() => {
  cleanup()
})

// Define the preloaded state
const preloadedState = {
  products: mockProducts
}

const mockStore = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authenticationApi.middleware)
      .concat(oAuth2Google.middleware)
      .concat(productsApi.middleware)
      .concat(ordersApi.middleware)
      .concat(usersApi.middleware)
})

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => (
      <BrowserRouter>
        <Provider store={mockStore}>{children}</Provider>
      </BrowserRouter>
    ),
    ...options
  })
}

export * from '@testing-library/react'
// override render export
export { customRender as render }
