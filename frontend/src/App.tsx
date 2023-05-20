// packages
import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// components
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import MyAccountPage from './pages/MyAccountPage'
import { checkAuthStatus } from './utilities/auth'
import MissingPage from './pages/MissingPage'
import AdminPage from './pages/AdminPage'

interface IRouteProps {
  children: React.ReactNode
}

const App: FC = () => {
  const isAuth = checkAuthStatus()

  // don't allow logged user pass to logIn page
  const LoggedUserProtectedRoute: FC<IRouteProps> = ({ children }) => {
    return isAuth.isLogIn ? <Navigate to="/shop" /> : <>{children}</>
  }

  const UserProtectedRoute: FC<IRouteProps> = ({ children }) => {
    return isAuth.isLogIn ? <>{children}</> : <Navigate to="/login" />
  }

  const AdminProtectedRoute: FC<IRouteProps> = ({ children }) => {
    return isAuth.role === 'ADMIN' ? <>{children}</> : <Navigate to="/login" />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/login"
          element={
            <LoggedUserProtectedRoute>
              <LoginPage />
            </LoggedUserProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <UserProtectedRoute>
              <MyAccountPage />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminPage />
            </AdminProtectedRoute>
          }
        />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
