import React, { FC } from 'react'
import NavBar from '../components/NavBar'

const HomePage: FC = () => {
  return (
    <div className="bg-mainPageBg w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start text-white">
      <NavBar isWhite={true} />
      <div className="relative text-5xl  h-full w-full flex justify-center items-center text-center flex-col ">
        <img
          className="absolute top-[10%] rotate-10 w-[1210px]"
          src="./src/assets/mainPageProductImg.png"
        />
        <div className="absolute top-[15%]">
          <p className="font-poppins text-xl mb-2">100% organic</p>
          <p className="font-garamond text-[83px] mb-1">WITHOUT</p>
          <p className="font-sulfates tracking-[4px] text-[58px]">SULFATES AND PARABENS</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
