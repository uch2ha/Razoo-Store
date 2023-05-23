// packages
import React, { FC, useState } from 'react'
// components
import { IProduct } from '../../../types'
import { CloseBtn } from '../../../assets/svg/CloseBtn'
import ProductForm from './products/ProductForm'
import UserForm from './users/UserForm'
import { IUser } from '../../../types'
import { useEditProductMutation, useSaveProductMutation } from '../../../store/api/products.api'
import { useEditUserMutation, useSaveUserMutation } from '../../../store/api/users.api'
import { IServerProduct } from './products/AdminProducts'

interface IAddEditComponentProps {
  isVisible: boolean
  isProduct: boolean
  propsItem: IServerProduct | IUser
  handleClose: () => void
}

const AddEditComponent: FC<IAddEditComponentProps> = ({
  isVisible,
  isProduct,
  propsItem,
  handleClose
}) => {
  const [item, setItem] = useState<IUser | IServerProduct>(propsItem)

  const [triggerEditProduct] = useEditProductMutation()
  const [triggerSaveProduct] = useSaveProductMutation()
  const [triggerEditUser] = useEditUserMutation()
  const [triggerSaveUser] = useSaveUserMutation()

  const checkIsEditMode = (propsItem: IServerProduct | IUser) => {
    if ('productId' in propsItem) return propsItem.productId !== ''
    if ('userId' in propsItem) return propsItem.userId !== ''
    return false
  }

  const isEditMod = checkIsEditMode(propsItem)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    // Product changes
    if (isProduct) {
      if (name === 'category') {
        setItem((prevProduct) => ({
          ...prevProduct
        }))
      }

      if (name === 'price') {
        return setItem((prevProduct) => ({
          ...prevProduct,
          [name]: value === '' ? 0 : parseFloat(value)
        }))
      }

      setItem((prevProduct) => ({
        ...prevProduct,
        [name]: value
      }))
    }
    // User changes
    if (!isProduct) {
      setItem((prevUser) => ({
        ...prevUser,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // handle product changes
    if (isProduct) {
      // edit
      if (isEditMod) {
        triggerEditProduct(item as IServerProduct)
      }
      // add
      if (!isEditMod) {
        triggerSaveProduct(item as IServerProduct)
      }
    }

    // handle user changes
    if (!isProduct) {
      // edit
      if (isEditMod) {
        triggerEditUser(item as IUser)
      }
      // add
      if (!isEditMod) {
        triggerSaveUser(item as IUser)
      }
    }
    handleClose()
    window.location.reload()
  }

  return (
    <div
      className={`fixed left-1/2 w-[55%] h-fit py-5 flex flex-col bg-[#898e68] overflow-scroll scrollbar-hide transform -translate-x-1/2 -translate-y-1/2 blur-none transition-all duration-700 ${
        isVisible ? 'z-50 top-1/2' : 'top-[-100%]'
      }`}>
      {isProduct && (
        <ProductForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          product={item as IServerProduct}
        />
      )}
      {!isProduct && (
        <UserForm handleChange={handleChange} handleSubmit={handleSubmit} user={item as IUser} />
      )}
      <div className="absolute top-3 right-3">
        <button onClick={handleClose}>
          <CloseBtn className="text-3xl" />
        </button>
      </div>
    </div>
  )
}

export default AddEditComponent
