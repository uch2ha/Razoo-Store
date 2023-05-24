// styles
import './index.scss'
// packages
import { ToastContainer } from 'react-toastify'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { GoogleOAuthProvider } from '@react-oauth/google'
// components
import store, { persistor } from './store/store'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <>
            <App />
            {/* add react-toastify pop up for whole app */}
            <ToastContainer
              progressClassName="toastProgress"
              bodyClassName="toastBody"
              pauseOnFocusLoss={false}
              limit={5}
            />
          </>
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
