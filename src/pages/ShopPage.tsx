// packages
import React, { FC } from 'react'
// components
import NavBar from '../components/NavBar'
import ProductsGridComponent from '../features/productsGrid/components/ProductsGridComponent'
// files
import img from '../assets/homePageBg.jpg'

const ShopPage: FC = () => {
  return (
    <div className="bg-gray-600 w-screen min-h-screen flex flex-col items-center  justify-start">
      <NavBar />
      <div className="h-full w-full flex justify-start items-center text-center flex-col">
        <img src={img} className="w-[82%] h-[200px] my-10" />
        <ProductsGridComponent />
      </div>
    </div>
  )
}

export default ShopPage
