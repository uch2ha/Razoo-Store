import React, { FC, useState } from 'react'
import AddEditComponent from '../AddEditComponent'
import { IUser } from '../../../../types/user.type'
import { getUserByIdFromLS } from '../../../../utilities/localStorage'

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
  const [isVisible, setIsVisible] = useState(true)
  const [isEditProductId, setIsEditProductId] = useState<string | null>(null)

  const userFormLS = getUserByIdFromLS(isEditProductId ?? '')

  const user = isEditProductId !== null && userFormLS ? userFormLS : initUser

  const handleClose = () => {
    setIsVisible(false)
    setIsEditProductId(null)
  }

  return (
    <div className="self-start text-center w-full mt-20">
      <p>123213</p>
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
