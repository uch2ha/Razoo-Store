import React, { FC, useState } from 'react'
import AddEditComponent from '../AddEditComponent'

const AdminUsers: FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isEditProductId, setIsEditProductId] = useState<string | null>(null)

  return (
    <div className="self-start text-center w-full mt-20">
      <p>123213</p>
      {isVisible && (
        <AddEditComponent
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          isProduct={false}
          isEditUserId={null}
          isEditProductId={isEditProductId}
          setIsEditProductId={setIsEditProductId}
        />
      )}
    </div>
  )
}

export default AdminUsers
