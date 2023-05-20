// packages
import { FC, useEffect, useState } from 'react'
// components
import UserCard from './UserCard'
import { IUser } from '../../../../types'
import { useGetAllUsersQuery } from '../../../../store/api/users.api'

interface IUsersListProps {
  handleEditMod: (id: string | null) => void
  users: IUser[]
}

const UsersList: FC<IUsersListProps> = ({ handleEditMod, users }) => {
  return (
    <div className="w-full h-full flex flex-col text-center items-center justify-start">
      <button
        className="border-[1px] px-5 text-2xl py-2 mb-5  bg-[#898e68]/50"
        onClick={() => handleEditMod(null)}>
        ADD USER
      </button>
      <div className="w-[82%]">
        {users &&
          users.map((user) => {
            return <UserCard key={user.email} user={user} handleEditMod={handleEditMod} />
          })}
      </div>
    </div>
  )
}

export default UsersList
