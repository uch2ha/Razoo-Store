import React, { FC } from 'react'

interface ISignUpInviteProps {
  onClick: () => void
}

const SignUpInvite: FC<ISignUpInviteProps> = ({ onClick }) => {
  return (
    <div className=" w-full h-full bg-green-600 flex flex-col justify-center items-center text-white">
      <p className="font-bold text-4xl">New Here?</p>
      <div className="py-8">
        <p>Sign up and discover a great amount</p>
        <p>of organic haircare products!</p>
      </div>
      <button className="border-2 py-4 px-16" onClick={onClick}>
        SIGN UP
      </button>
    </div>
  )
}

export default SignUpInvite
