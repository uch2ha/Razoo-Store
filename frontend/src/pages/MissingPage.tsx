// packages
import { FC } from 'react'
// components
import NavBar from '../components/NavBar'

const MissingPage: FC = () => {
  return (
    <div className=" w-screen h-screen  flex flex-col items-center  justify-start">
      <NavBar />
      <div className="h-full w-full flex justify-start items-center text-center flex-col">
        <h1 className="mt-[10%]">Route Not Found</h1>
      </div>
    </div>
  )
}

export default MissingPage
