// packages
import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// components
import { RootState } from '../../../store/store'
import { userActions } from '../../../store/user/user.slice'

const MyInfo: FC = () => {
  const [name, setName] = useState('')
  const [isEditPersonalData, setIsEditPersonalData] = useState(false)

  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  const handleEditMode = (type: string) => {
    if (type === 'personalData') return setIsEditPersonalData(true)
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
  }

  const handleInputChange = (e: any) => {
    if (e.target.id === 'name') return setName(e.target.value)
  }

  return (
    <>
      <div className="border-b-[1px] min-h-[7rem] pl-[6%] flex flex-col justify-center">
        <h2 className="font-[600]">MY INFO</h2>
        <div className="flex mt-1">
          <p>Here you can view and update own information.</p>
          <p>Manage your login information and password here.</p>
        </div>
      </div>
      <div className="border-b-[1px] flex justify-between pl-[6%]">
        <div>
          <div className="py-5">
            <p className="underline underline-offset-1 font-[600]">Name</p>
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
            <p className="underline underline-offset-1 font-[600]">Address</p>
            <p>SomethingStreet 1A 55, 00100 Helsinki</p>
          </div>
          <div className="py-5">
            <p className="underline underline-offset-1 font-[600]">Phone number</p>
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
      <div className="border-b-[1px] flex justify-between pl-[6%]">
        <div className="py-5">
          <p className="underline underline-offset-1 font-[600]">E-mail</p>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className="border-b-[1px] flex justify-between pl-[6%]">
        <div>
          <div className="py-5">
            <p className="underline underline-offset-1 font-[600]">Password</p>
            <p>####</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyInfo
