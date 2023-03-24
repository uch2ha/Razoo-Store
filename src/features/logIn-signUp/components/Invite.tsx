import React, { FC } from 'react'

interface IInviteProps {
  onClick: () => void
  texts: { title: string; description1: string; description2: string; btnLabel: string }
}

const Invite: FC<IInviteProps> = ({ onClick, texts }) => {
  return (
    <div className="w-full h-full bg-green-600 flex flex-col justify-center items-center text-white">
      <p className="font-bold text-4xl">{texts.title}</p>
      <div className="py-8">
        <p>{texts.description1}</p>
        <p>{texts.description2}</p>
      </div>
      <button className="border-2 py-4 px-16" onClick={onClick}>
        {texts.btnLabel}
      </button>
    </div>
  )
}

export default Invite
