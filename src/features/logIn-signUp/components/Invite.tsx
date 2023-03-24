import React, { FC } from 'react'

interface IInviteProps {
  onClick: () => void
  texts: { title: string; description1: string; description2: string; btnLabel: string }
  isLogin: boolean
}

const Invite: FC<IInviteProps> = ({ onClick, texts, isLogin }) => {
  return (
    <div
      className={`w-full h-full bg-green-600 flex flex-col justify-center items-center text-white ${
        isLogin ? 'rounded-tr-md rounded-br-md' : 'rounded-tl-md rounded-bl-md'
      }`}>
      <h2 className="font-bold">{texts.title}</h2>
      <div className="py-8">
        <p className="text-xl mb-2">{texts.description1}</p>
        <p className="text-xl">{texts.description2}</p>
      </div>
      <button className="border-2 py-4 px-16" onClick={onClick}>
        {texts.btnLabel}
      </button>
    </div>
  )
}

export default Invite
