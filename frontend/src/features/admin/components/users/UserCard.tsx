// packages
import { FC } from 'react'
// components
import { IUser } from '../../../../types'
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
    <div className="border-[1px] px-6 py-4 flex mb-4 text-2xl  ">
      <div className="flex flex-col justify-around text-start w-1/6">
        <p>Id: {user.id}</p>
        <p>Role: {user.role}</p>
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
            className="border-[1px] px-5 text-xl py-2  mr-5 mt-5 bg-[#898e68]/50"
            onClick={() => handleEditMod(user.id)}>
            EDIT
          </button>
          <button
            className="border-[1px] px-5 text-xl py-2  mt-5 bg-[#898e68]"
            onClick={handleDelete}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserCard
