// packages
import { FC } from 'react'
// components
import { IUser } from '../../../../types'
import { useDeleteUserMutation } from '../../../../store/api/users.api'
import { ShowConfirmation } from '../../../../components/PopUpConfirmation'
import { popUpError1100ms, popUpSuccess1100ms } from '../../../../components/notifications'

interface IUserCardProps {
  user: IUser
  handleEditMod: (id: string) => void
}

const UserCard: FC<IUserCardProps> = ({ user, handleEditMod }) => {
  const [triggerDeleteUser] = useDeleteUserMutation()

  const askConfirmation = () => {
    ShowConfirmation((confirmed) => {
      if (confirmed) handleDelete()
    })
  }

  const handleDelete = async () => {
    if (user.userId) {
      const res = await triggerDeleteUser(user.userId)
      if ('data' in res) {
        popUpSuccess1100ms('Succeed')
      } else {
        popUpError1100ms('Something went wrong')
      }
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
        <button className="border-[1px] px-5 text-xl py-2  bg-[#898e68]" onClick={askConfirmation}>
          DELETE
        </button>
      </div>
    </div>
  )
}

export default UserCard
