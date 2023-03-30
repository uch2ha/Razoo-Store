import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { userActions } from '../../../store/user/user.slice'

const MyInfo: FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isEditPersonalData, setIsEditPersonalData] = useState(false)
  const [isEditEmail, setIsEditEmail] = useState(false)
  const [isEditPassword, setIsEditPassword] = useState(false)

  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  const handleEditMode = (type: string) => {
    if (type === 'personalData') return setIsEditPersonalData(true)
    if (type === 'email') return setIsEditEmail(true)
    if (type === 'password') return setIsEditPassword(true)
  }

  const handleSave = (type: string) => {
    if (type === 'personalData') {
      if (name.length !== 0) {
        const trimName = name.trimEnd().trimStart()
        const [firstName, lastName] = trimName.split(' ')
        if (!firstName || !lastName) return
        dispatch(userActions.changeFirstLastName({ firstName, lastName }))
      }
      return setIsEditPersonalData(false)
    }
    if (type === 'email') return setIsEditEmail(false)
    if (type === 'password') return setIsEditPassword(false)
  }

  const handleInputChange = (e: any) => {
    if (e.target.id === 'name') return setName(e.target.value)
    if (e.target.id === 'email') return setEmail(e.target.value)
  }

  return (
    <>
      <div className="border-b-[1px] min-h-[7rem] pl-[10%] flex flex-col justify-center">
        <h2>MY INFO</h2>
        <div className="flex">
          <p>Here you can view and update own information.</p>
          <p>Manage your login information and password here.</p>
        </div>
      </div>
      <div className="border-b-[1px] flex justify-between pl-[10%]">
        <div>
          <div className="py-5">
            <p className="underline underline-offset-1">Name</p>
            {isEditPersonalData ? (
              <input
                id="name"
                value={name}
                onChange={handleInputChange}
                placeholder={`${user?.firstName} ${user?.lastName}`}
              />
            ) : (
              <p>
                {user?.firstName} {user?.lastName}
              </p>
            )}
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
          {isEditPersonalData ? (
            <button
              className="min-w-[250px] py-2 bg-black text-white"
              onClick={() => handleSave('personalData')}>
              SAVE
            </button>
          ) : (
            <button
              className="min-w-[250px] py-2 bg-black text-white"
              onClick={() => handleEditMode('personalData')}>
              EDIT
            </button>
          )}
        </div>
      </div>
      <div className="border-b-[1px] flex justify-between pl-[10%]">
        <div>
          <div className="py-5">
            <p className="underline underline-offset-1">E-mail</p>
            {isEditEmail ? (
              <input
                id="email"
                onChange={handleInputChange}
                value={email}
                placeholder={user?.email}
              />
            ) : (
              <p>{user?.email}</p>
            )}
          </div>
        </div>
        <div className="pr-5 pt-3">
          {isEditEmail ? (
            <button
              className="min-w-[250px] py-2 bg-black text-white"
              onClick={() => handleSave('email')}>
              SAVE
            </button>
          ) : (
            <button
              className="min-w-[250px] py-2 bg-black text-white"
              onClick={() => handleEditMode('email')}>
              EDIT
            </button>
          )}
        </div>
      </div>
      <div className="border-b-[1px] flex justify-between pl-[10%]">
        <div>
          <div className="py-5">
            <p className="underline underline-offset-1">Password</p>
            <p>####</p>
          </div>
        </div>
        <div className="pr-5 pt-3">
          {isEditPassword ? (
            <button
              className="min-w-[250px] py-2 bg-black text-white"
              onClick={() => handleSave('password')}>
              SAVE
            </button>
          ) : (
            <button
              className="min-w-[250px] py-2 bg-black text-white"
              onClick={() => handleEditMode('password')}>
              EDIT
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default MyInfo
