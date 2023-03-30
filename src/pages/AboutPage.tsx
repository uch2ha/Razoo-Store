import React, { FC } from 'react'
import NavBar from '../components/NavBar'

const AboutPage: FC = () => {
  return (
    <div className="relative">
      <div className="w-screen h-screen flex flex-col items-end justify-start text-white">
        <NavBar isWhite={true} />
        <div className="h-full w-1/2 flex justify-start items-center flex-col">
          <div className="w-[80%] flex flex-col items-center mt-[10%]">
            <div className="mb-10 text-[70px] h-fit">
              <p className="font-garamond">HOW IT</p>
              <p className="font-sulfates tracking-[4px]">STARTED...</p>
            </div>
            <div className="text-[22px]">
              <p className="mb-3">Razoo was born from a personal quest for healthier living.</p>
              <p className="mb-3">Our founder struggled with skin issues caused by conventional </p>
              <p className="mb-3">
                skincare products and decided to create a line of organic skincare
              </p>
              <p className="mb-3">that would be safe, effective, and environmentally conscious.</p>
              <p className="mb-3">Our goal is to provide the best in organic skincare</p>
              <p className="mb-3">by using high-quality ingredients and sustainable practices. </p>
              <p className="mb-3">We believe beauty is more than skin deep and are committed</p>
              <p className="mb-3">to making a positive impact on the world.</p>
              <p>Thank you for joining us on this journey.</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./src/assets/aboutPageImg.jpg"
        className="absolute top-0 left-0 object-cover h-full object-center w-1/2 z-[-1]"
      />
      <div className=" absolute top-0 right-0 w-1/2 z-[-1] h-full bg-[#434739]" />
    </div>
  )
}

export default AboutPage
