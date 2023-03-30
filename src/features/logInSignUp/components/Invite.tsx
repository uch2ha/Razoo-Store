import React, { FC } from 'react'
import Button from '../../../components/Button'

interface IInviteProps {
  onClick: () => void
  texts: { title: string; firstDescription: string; secondDescription: string; btnLabel: string }
  isLogin: boolean
}

const Invite: FC<IInviteProps> = ({ onClick, texts, isLogin }) => {
  return (
    <div
      className={`w-full h-full  flex flex-col justify-center items-center text-white ${
        isLogin ? '-tr-md -br-md' : '-tl-md -bl-md'
      }`}>
      <h2 className="font-bold">{texts.title}</h2>
      <div className="py-8">
        <p className="text-xl mb-2">{texts.firstDescription}</p>
        <p className="text-xl">{texts.secondDescription}</p>
      </div>
      <Button label={texts.btnLabel} clickHandler={onClick} styles="border-[1px] py-4 px-16" />
    </div>
  )
}

export default Invite
