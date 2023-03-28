import React, { FC } from 'react'
import NavBar from '../components/NavBar'

import shampoo from '../assets/productImg/shampoo.png'

const HomePage: FC = () => {
  return (
    <div className="bg-home-page-bg w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center text-white justify-start">
      <NavBar />
      <div className="relative text-5xl h-full w-full flex justify-center items-center text-center flex-col ">
        <img className="absolute top-[20%] rotate-12 w-[500px] " src={shampoo} />
        <div className="absolute top-[20%]">
          <p>100% organic</p>
          <p>WITHOUT</p>
          <p>SULFATES AND PARABENS</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
