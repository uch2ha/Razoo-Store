// packages
import { FC, useEffect, useState } from 'react'
// components
import AddEditComponent from '../AddEditComponent'
import { IUser } from '../../../../types'
import UsersList from './UsersList'
import { useGetAllUsersQuery } from '../../../../store/api/users.api'

const initUser: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  role: 'USER',
  password: ''
}

const AdminUsers: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isEditUserId, setIsEditUserId] = useState<string | null>(null)
  const [users, setUsers] = useState<IUser[]>([])

  const { data, isError, isLoading } = useGetAllUsersQuery()

  // set fetched data to product store
  useEffect(() => {
    if (data !== undefined) {
      setUsers(data)
    }
  }, [isLoading])

  const checkUser = users.find((u) => u.userId === isEditUserId)

  const user = checkUser ? checkUser : initUser

  const handleEditMod = (id: string | null) => {
    setIsVisible(true)
    setIsEditUserId(id)
  }

  const handleClose = () => {
    setIsVisible(false)
    setIsEditUserId(null)
  }

  return (
    <div className="self-start text-center w-full mt-10">
      {isLoading && <h1 className="col-span-full mx-auto my-4 text-4xl py-2 px-6">Loading...</h1>}
      {isError && (
        <h1 className="col-span-full mx-auto my-4 text-4xl py-2 px-6">Something went wrong...</h1>
      )}
      {!isLoading && !isError && (
        <>
          <UsersList handleEditMod={handleEditMod} users={users} />
          {isVisible && (
            <AddEditComponent
              isVisible={isVisible}
              isProduct={false}
              propsItem={user}
              handleClose={handleClose}
            />
          )}
        </>
      )}
    </div>
  )
}

export default AdminUsers
