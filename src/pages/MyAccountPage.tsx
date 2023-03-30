import React, { FC } from 'react'
import NavBar from '../components/NavBar'
import MyAccount from '../features/myAccount/components/MyAccount'

const MyAccountPage: FC = () => {
  return (
    <div className="w-screen max-h-screen min-h-screen flex flex-col items-center  justify-start">
      <NavBar />
      <div className="h-[calc(100vh-103px-48px)] w-[91%] mt-12 flex place-self-start flex-col">
        <MyAccount />
      </div>
    </div>
  )
}

export default MyAccountPage
