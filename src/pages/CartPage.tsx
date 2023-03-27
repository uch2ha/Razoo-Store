import React, { FC } from 'react'
import NavBar from '../components/NavBar'

const CartPage: FC = () => {
  return (
    <div className="bg-gray-400 w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center  justify-start">
      <NavBar />
      <div className=" h-full w-full flex justify-center items-center text-center flex-col">
        <p>CartPage</p>
      </div>
    </div>
  )
}

export default CartPage
