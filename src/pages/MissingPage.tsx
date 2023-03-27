import React from 'react'
import NavBar from '../components/NavBar'

const MissingPage = () => {
  return (
    <div className="bg-gray-400 w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center  justify-start">
      <NavBar />
      <div className="h-full w-full flex justify-start items-center text-center flex-col">
        <h1 className="mt-[10%]">Route Not Found</h1>
      </div>
    </div>
  )
}

export default MissingPage
