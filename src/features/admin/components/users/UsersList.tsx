import React, { FC } from 'react'
import { getUsersFromLS } from '../../../../utilities/localStorage'
import UserCard from './UserCard'

interface IUsersListProps {
  handleEditMod: (id: string | null) => void
}

const UsersList: FC<IUsersListProps> = ({ handleEditMod }) => {
  const users = getUsersFromLS()

  return (
    <div className="w-full h-full flex flex-col text-center items-center justify-start">
      <button
        className="border-2 px-5 text-2xl py-2 mb-5 rounded-md"
        onClick={() => handleEditMod(null)}>
        ADD USER
      </button>
      <div className="w-[82%]">
        {users.map((user) => {
          return <UserCard key={user.id} user={user} handleEditMod={handleEditMod} />
        })}
      </div>
    </div>
  )
}

export default UsersList
