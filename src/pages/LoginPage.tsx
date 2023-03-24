import React, { FC, useState } from 'react'
import NavBar from '../components/NavBar'
import LogInInvite from '../features/signUp-logIn/components/LogInInvite'
import SignUpForm from '../features/signUp-logIn/components/SignUpForm'
import SignUpInvite from '../features/signUp-logIn/components/SignUnInvite'
import LogInForm from '../features/signUp-logIn/components/LogInForm'

const LoginPage: FC = () => {
  const [isLogin, setIsLogin] = useState(true)

  const handleSwitch = () => {
    setIsLogin((prev) => !prev)
  }

  return (
    <div className="bg-gray-400 w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center  justify-start">
      <NavBar />
      <div className="h-full w-full flex justify-center items-center text-center flex-col">
        <div className="relative flex w-2/3 h-3/4 bg-white">
          <div
            className={`left-0 w-2/3 transform absolute h-full transition-transform  duration-700 ${
              isLogin ? 'translate-x-[0%]' : ' translate-x-[50%]'
            }`}>
            {isLogin ? <LogInForm /> : <SignUpForm />}
          </div>
          <div
            className={`right-0 w-1/3 transform absolute h-full transition-transform  duration-700 ${
              isLogin ? 'translate-x-[0%]' : ' translate-x-[-200%]'
            }`}>
            {isLogin ? (
              <SignUpInvite onClick={handleSwitch} />
            ) : (
              <LogInInvite onClick={handleSwitch} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
