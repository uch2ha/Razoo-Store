import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { IUser } from '../../../types'

interface IUserInfoSide {
  user: IUser
}

const UserInfoSide: FC<IUserInfoSide> = ({ user }) => {
  const [name, setName] = useState(user.firstName)
  const [surName, setSurName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [number, setNumber] = useState('0450101010')
  const [address, setAddress] = useState('SomethingStreet 1A 55, 00100 Helsinki')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'surName':
        setSurName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'number':
        setNumber(value)
        break
      case 'address':
        setAddress(value)
        break
      default:
        break
    }
  }

  return (
    <div className="h-fit mt-6 mb-14">
      <div className="grid 2xl:grid-cols-2 gap-y-4">
        <div className="py-2 w-[90%] my-2 ">
          <p>Name</p>
          <input
            value={name}
            onChange={handleChange}
            className="w-full h-full pl-4 text-xl bg-transparent border-[1px] border-gray focus:rounded-[0px]"
          />
        </div>
        <div className="py-2 w-[90%] my-2">
          <p>Surname</p>
          <input
            value={surName}
            onChange={handleChange}
            className="w-full h-full pl-4 text-xl bg-transparent border-[1px] border-gray focus:rounded-[0px]"
          />
        </div>
        <div className="py-2 w-[90%] my-2">
          <p>E-mail</p>
          <input
            value={email}
            onChange={handleChange}
            className="w-full h-full pl-4 text-xl bg-transparent border-[1px] border-gray focus:rounded-[0px]"
          />
        </div>
        <div className="py-2 w-[90%] my-2">
          <p>Phone number</p>
          <input
            value={number}
            onChange={handleChange}
            className="w-full h-full pl-4 text-xl bg-transparent border-[1px] border-gray focus:rounded-[0px]"
          />
        </div>
        <div className="py-2 w-[90%] my-2">
          <p>Address</p>
          <input
            value={address}
            onChange={handleChange}
            className="w-full h-full pl-4 text-xl bg-transparent border-[1px] border-gray focus:rounded-[0px]"
          />
        </div>
      </div>
    </div>
  )
}

export default UserInfoSide
