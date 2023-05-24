// packages
import { FC } from 'react'
// components
import { IUser } from '../../../../types'
import { useDeleteUserMutation } from '../../../../store/api/users.api'

interface IUserCardProps {
  user: IUser
  handleEditMod: (id: string) => void
}

const UserCard: FC<IUserCardProps> = ({ user, handleEditMod }) => {
  const [triggerDeleteUser] = useDeleteUserMutation()
  const handleDelete = () => {
    if (user.userId) {
      triggerDeleteUser(user.userId)
      // cant remove reload(), so much to rewrite
      // TODO fix this
      window.location.reload()
    }
  }

  return (
    <div className="border-[1px] px-6 py-4 flex mb-4 text-2xl  ">
      <div className="flex flex-col  text-start w-3/4 space-y-3">
        <p>Id: {user.userId}</p>
        <p>Email: {user.email}</p>
        <p>FirstName: {user.firstName}</p>
        <p>LastName: {user.lastName}</p>
        <p>Role: {user.role}</p>
      </div>
      <div className="flex flex-col justify-around text-start w-1/4">
        <button
          className="border-[1px] px-5 text-xl py-2  bg-[#898e68]/50"
          onClick={() => handleEditMod(user.userId ?? '')}>
          EDIT
        </button>
        <button className="border-[1px] px-5 text-xl py-2  bg-[#898e68]" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  )
}

export default UserCard
