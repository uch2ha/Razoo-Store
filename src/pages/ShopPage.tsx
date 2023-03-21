import React, { FC } from 'react'
import NavBar from '../components/NavBar'

const ShopPage: FC = () => {
  return (
    <div className="bg-gray-600 w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center  justify-start">
      <NavBar />
      <div className=" h-full w-full flex justify-center items-center text-center flex-col">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, expedita.</p>
      </div>
    </div>
  )
}

export default ShopPage
