import React, { FC } from 'react'
import NavBar from '../components/NavBar'
import MyAccount from '../features/myAccount/components/MyAccount'

const MyAccountPage: FC = () => {
  return (
    <div className="bg-gray-400 w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center  justify-start">
      <NavBar />
      <div className="h-full w-[91%] mt-12 flex place-self-start flex-col">
        <MyAccount />
      </div>
    </div>
  )
}

export default MyAccountPage
