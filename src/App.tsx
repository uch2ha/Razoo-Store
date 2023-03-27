// packages
import { useEffect, FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// components
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import { initLocalStorage } from './utilities/localStorage'
import { useGetAllDataQuery } from './store/api/DB/db.api'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import MyAccountPage from './pages/MyAccountPage'
import AdminPage from './pages/AdminPage'
import { checkAuthStatus } from './utilities/auth'
import MissingPage from './pages/MissingPage'

interface IRouteProps {
  children: React.ReactNode
}

const App: FC = () => {
  // get all fixed data from local database
  const { data } = useGetAllDataQuery()

  const isAuth = checkAuthStatus()

  const ProtectedRoute: FC<IRouteProps> = ({ children }) => {
    return isAuth.status ? <>{children}</> : <Navigate to="/login" />
  }

  const AdminRoute: FC<IRouteProps> = ({ children }) => {
    return isAuth.isAdmin ? <>{children}</> : <Navigate to="/login" />
  }

  useEffect(() => {
    if (data) {
      //set all fixed data to LS
      initLocalStorage(data)
    }
  }, [data])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <MyAccountPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPage />
            </AdminRoute>
          }
        />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
