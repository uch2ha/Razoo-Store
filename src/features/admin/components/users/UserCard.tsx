import React, { FC } from 'react'
import { IUser } from '../../../../types/user.type'
import { removeUserByIdFromLS } from '../../../../utilities/localStorage'

interface IUserCardProps {
  user: IUser
  handleEditMod: (id: string) => void
}

const UserCard: FC<IUserCardProps> = ({ user, handleEditMod }) => {
  const handleDelete = () => {
    removeUserByIdFromLS(user.id)
  }

  return (
    <div className="border-[1px] px-6 py-4 flex mb-4 text-2xl rounded-md ">
      <div className="flex flex-col justify-around text-start w-1/6">
        <p>Id: {user.id}</p>
        <p>IsAdmin: {user.isAdmin ? 'true' : 'false'}</p>
      </div>
      <div className="flex flex-col justify-around  text-start w-2/6">
        <p>Email: {user.email}</p>
        <p>Password: {user.password ? user.password : 'null'}</p>
      </div>
      <div className="flex flex-col justify-around  text-start w-2/6">
        <p>FirstName: {user.firstName}</p>
        <p>LastName: {user.lastName}</p>
      </div>
      <div className="flex flex-col justify-around  text-start w-1/6">
        <p>isGoogleLogin: {user.isGoogleLogin ? 'true' : 'false'}</p>
        <div className="flex ">
          <button
            className="border-[1px] px-5 text-xl py-2 rounded-md mr-5 mt-5"
            onClick={handleDelete}>
            DELETE
          </button>
          <button
            className="border-[1px] px-5 text-xl py-2 rounded-md mt-5"
            onClick={() => handleEditMod(user.id)}>
            EDIT
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserCard
