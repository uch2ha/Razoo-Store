// packages
import { FC, useState } from 'react'
// components
import AddEditComponent from '../AddEditComponent'
import { IUser } from '../../../../types'
import { getUserByIdFromLS } from '../../../../utilities/localStorage'
import UsersList from './UsersList'

const initUser: IUser = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  isAdmin: false,
  isGoogleLogin: false,
  password: ''
}

const AdminUsers: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isEditProductId, setIsEditProductId] = useState<string | null>(null)

  const userFormLS = getUserByIdFromLS(isEditProductId ?? '')

  const user = isEditProductId !== null && userFormLS ? userFormLS : initUser

  const handleEditMod = (id: string | null) => {
    setIsVisible(true)
    setIsEditProductId(id)
  }

  const handleClose = () => {
    setIsVisible(false)
    setIsEditProductId(null)
  }

  return (
    <div className="self-start text-center w-full mt-10">
      <UsersList handleEditMod={handleEditMod} />
      {isVisible && (
        <AddEditComponent
          isVisible={isVisible}
          isProduct={false}
          propsItem={user}
          handleClose={handleClose}
        />
      )}
    </div>
  )
}

export default AdminUsers
