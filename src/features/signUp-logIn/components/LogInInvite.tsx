import React, { FC } from 'react'

interface ILogInInviteProps {
  onClick: () => void
}

const LogInInvite: FC<ILogInInviteProps> = ({ onClick }) => {
  return (
    <div className="w-full h-full bg-green-600 flex flex-col justify-center items-center text-white">
      <p className="font-bold text-4xl">Welcome Back!</p>
      <div className="py-8">
        <p>To keep connected with us pleas</p>
        <p>login with your personal info</p>
      </div>
      <button className="border-2 py-4 px-16" onClick={onClick}>
        SIGN IN
      </button>
    </div>
  )
}

export default LogInInvite
