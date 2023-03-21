import React, { FC } from 'react'
import NavBar from '../components/NavBar'

import img from '../assets/homePageBg.jpg'
import ShopComponent from '../components/ShopComponent'

const ShopPage: FC = () => {
  return (
    <div className="bg-gray-600 w-screen h-full flex flex-col items-center  justify-start">
      <NavBar />
      <div className="h-full w-full flex justify-start items-center text-center flex-col">
        <img src={img} className="w-[86%] h-[200px] my-10" />
        <ShopComponent />
      </div>
    </div>
  )
}

export default ShopPage
