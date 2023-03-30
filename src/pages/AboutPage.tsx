import React, { FC } from 'react'
import NavBar from '../components/NavBar'

const AboutPage: FC = () => {
  return (
    <div className="relative">
      <div className="w-screen h-screen flex flex-col items-end justify-start text-white">
        <NavBar isWhite={true} />
        <div className="h-full w-1/2 flex justify-center  flex-col">
          <div>
            <p>HOW IT</p>
            <p>STARTED...</p>
          </div>
          <div>
            <p>Razoo was born from a personal quest for healthier living.</p>
            <p>Razoo was born from a personal quest for healthier living.</p>
            <p>Our founder struggled with skin issues caused by conventional </p>
            <p>
              skincare products and decided to create a line of organic skincare that would be safe,
              effective, and environmentally conscious. Our goal is to provide the best in organic
              skincare
            </p>
            <p>by using high-quality ingredients and sustainable practices. </p>
            <p>We believe beauty is more than skin deep and are committed </p>
            <p>
              to making a positive impact on the world. Thank you for joining us on this journey.
            </p>
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
