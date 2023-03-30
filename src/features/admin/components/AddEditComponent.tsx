import React, { FC, useState } from 'react'
import { IProduct } from '../../../types/product.type'
import { CloseBtn } from '../../../assets/svg/CloseBtn'
import ProductForm from './products/ProductForm'
import { useDispatch } from 'react-redux'
import { productsActions } from '../../../store/products/products.slice'
import UserForm from './users/UserForm'
import { IUser } from '../../../types/user.type'
import { setNewUserToLS, setNewUsersDataToLS } from '../../../utilities/localStorage'

interface IAddEditComponentProps {
  isVisible: boolean
  isProduct: boolean
  propsItem: IProduct | IUser
  handleClose: () => void
}

const AddEditComponent: FC<IAddEditComponentProps> = ({
  isVisible,
  isProduct,
  propsItem,
  handleClose
}) => {
  const isEditMod = propsItem.id !== ''
  const [item, setItem] = useState<IUser | IProduct>(propsItem)

  const dispatch = useDispatch()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    // Product changes
    if (isProduct) {
      if (name === 'category') {
        setItem((prevProduct) => ({
          ...prevProduct,
          img: value
        }))
      }

      setItem((prevProduct) => ({
        ...prevProduct,
        [name]: value
      }))
    }
    // User changes
    if (!isProduct) {
      let convertedValue: string | boolean = value

      if (convertedValue === 'true') convertedValue = true
      if (convertedValue === 'false') convertedValue = false

      setItem((prevUser) => ({
        ...prevUser,
        [name]: convertedValue
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // handle product changes
    if (isProduct) {
      // edit
      if (isEditMod) {
        dispatch(productsActions.editProductById(item as IProduct))
        handleClose()
      }
      // add
      if (!isEditMod) {
        dispatch(productsActions.addProduct(item as IProduct))
        handleClose()
      }
    }

    // handle user changes
    if (!isProduct) {
      // edit
      if (isEditMod) {
        setNewUsersDataToLS(item as IUser)
        handleClose()
      }
      // add
      if (!isEditMod) {
        setNewUserToLS(item as IUser)
        handleClose()
      }
    }
  }

  return (
    <div
      className={`py-5 fixed left-1/2 w-[55%] h-[95%] flex flex-col bg-[#898e68] overflow-scroll scrollbar-hide transform -translate-x-1/2 -translate-y-1/2 blur-none transition-all duration-700 ${
        isVisible ? 'z-50 top-1/2' : 'top-[-100%]'
      }`}>
      {isProduct && (
        <ProductForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          product={item as IProduct}
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
