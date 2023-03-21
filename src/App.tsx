// packages
import { useEffect, FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// components
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import { initLocalStorage } from './functions/localStorage'
import { useGetAllDataQuery } from './store/DB/db.api'

const App: FC = () => {
  // get all fixed data from local database
  const { data } = useGetAllDataQuery()

  useEffect(() => {
    if (data) {
      //set all fixed data to LS
      console.log('app')
      initLocalStorage(data)
    }
  }, [data])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
