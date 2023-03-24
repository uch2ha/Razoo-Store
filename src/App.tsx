// packages
import { useEffect, FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// components
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import { initLocalStorage } from './services/localStorage'
import { useGetAllDataQuery } from './store/DB/db.api'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import MyAccountPage from './pages/MyAccountPage'
import AdminPage from './pages/AdminPage'

const App: FC = () => {
  // get all fixed data from local database
  const { data } = useGetAllDataQuery()

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
        <Route path="/account" element={<MyAccountPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
