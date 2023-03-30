import React, { FC } from 'react'
import NavBar from '../components/NavBar'

const AboutPage: FC = () => {
  return (
    <div className="relative ">
      <div className="w-screen h-screen flex flex-col items-end justify-start">
        <NavBar />
        <div className="h-full w-1/2 flex justify-center  flex-col">
          <div>
            <p>asdasd</p>
            <p>asdasd</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime nulla natus iure
              minus distinctio nesciunt tempora recusandae molestiae modi! Dolor tenetur perferendis
              nam mollitia recusandae aut non unde tempora?
            </p>
          </div>
        </div>
      </div>
      <img
        src="./src/assets/aboutPageImg.jpg"
        className="absolute top-0 left-0 object-cover h-full object-center w-1/2 z-[-1]"
      />
      <div className="bg-gray-500 absolute top-0 right-0 w-1/2 z-[-1] h-full" />
    </div>
  )
}

export default AboutPage
