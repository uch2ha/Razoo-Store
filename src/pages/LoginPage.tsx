import React, { FC, useState } from 'react'
import NavBar from '../components/NavBar'
import LogInForm from '../features/logIn-signUp/components/LogInForm'
import SignUpForm from '../features/logIn-signUp/components/SignUpForm'
import Invite from '../features/logIn-signUp/components/Invite'

const logInText = {
  title: 'Welcome Back!',
  description1: 'To keep connected with us pleas',
  description2: 'login with your personal info',
  btnLabel: 'SIGN IN'
}
const signUpText = {
  title: 'New Here?',
  description1: 'Sign up and discover a great amount',
  description2: 'of organic haircare products!',
  btnLabel: 'SIGN UP'
}

const LoginPage: FC = () => {
  const [isLogin, setIsLogin] = useState(true)

  const handleSwitch = () => {
    setIsLogin((prev) => !prev)
  }

  return (
    <div className="bg-gray-400 w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center  justify-start">
      <NavBar />
      <div className="h-full w-full flex justify-center items-center text-center flex-col ">
        <div className="relative flex w-2/3 h-3/4 bg-white rounded-md">
          <div
            className={`left-0 w-2/3 transform absolute h-full transition-transform duration-700  ${
              isLogin ? 'translate-x-[0%] ' : ' translate-x-[50%] '
            }`}>
            {isLogin ? <LogInForm /> : <SignUpForm />}
          </div>
          <div
            className={`right-0 w-1/3 transform absolute h-full transition-transform duration-700 ${
              isLogin ? 'translate-x-[0%]' : 'translate-x-[-200%]'
            } `}>
            {isLogin ? (
              <Invite texts={signUpText} onClick={handleSwitch} isLogin={isLogin} />
            ) : (
              <Invite texts={logInText} onClick={handleSwitch} isLogin={isLogin} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
