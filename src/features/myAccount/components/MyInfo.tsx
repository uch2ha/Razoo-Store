import React, { FC } from 'react'
import Button from '../../../components/Button'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

const MyInfo: FC = () => {
  const user = useSelector((state: RootState) => state.user)

  const test = () => {
    console.log(12)
  }
  return (
    <>
      <div className="border-b-2 min-h-[7rem] pl-[10%] flex flex-col justify-center">
        <h2>MY INFO</h2>
        <div className="flex">
          <p>Here you can view and update own information.</p>
          <p>Manage your login information and password here.</p>
        </div>
      </div>
      <div className="border-b-2 flex justify-between pl-[10%]">
        <div>
          <div className="py-5">
            <p className="underline underline-offset-1">Name</p>
            <p>
              {user?.firstName} {user?.lastName}
            </p>
          </div>
          <div className="py-5">
            <p className="underline underline-offset-1">Address</p>
            <p>SomethingStreet 1A 55, 00100 Helsinki</p>
          </div>
          <div className="py-5">
            <p className="underline underline-offset-1">Phone number</p>
            <p>0450101010</p>
          </div>
        </div>
        <div className="pr-5 pt-3">
          <Button label="EDIT" clickHandler={test} styles="px-28 py-2 bg-black text-white" />
        </div>
      </div>
      <div className="border-b-2 flex justify-between pl-[10%]">
        <div>
          <div className="py-5">
            <p className="underline underline-offset-1">E-mail</p>
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="pr-5 pt-3">
          <Button label="EDIT" clickHandler={test} styles="px-28 py-2 bg-black text-white" />
        </div>
      </div>
      <div className="border-b-2 flex justify-between pl-[10%]">
        <div>
          <div className="py-5">
            <p className="underline underline-offset-1">Password</p>
            <p>####</p>
          </div>
        </div>
        <div className="pr-5 pt-3">
          <Button label="EDIT" clickHandler={test} styles="px-28 py-2 bg-black text-white" />
        </div>
      </div>
    </>
  )
}

export default MyInfo
