import React, { FC, useState } from 'react'
import { IProduct } from '../../../types/product.type'
import { CloseBtn } from '../../../assets/svg/CloseBtn'
import ProductForm from './products/ProductForm'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { productsActions } from '../../../store/products/products.slice'
import UserForm from './users/UserForm'
import { IUser } from '../../../types/user.type'

const initProduct: IProduct = {
  id: '',
  img: '',
  name: '',
  description: '',
  instruction: '',
  category: 'shampoo',
  size: '50ml',
  price: 0
}

const initUser: IUser = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  isAdmin: false,
  isGoogleLogin: false,
  password: ''
}

interface IAddEditComponentProps {
  isVisible: boolean
  setIsVisible: (b: boolean) => void
  isProduct: boolean
  isEditProductId: string | null
  isEditUserId: string | null
  setIsEditProductId: (b: string | null) => void
}

const AddEditComponent: FC<IAddEditComponentProps> = ({
  isVisible,
  setIsVisible,
  isProduct,
  isEditProductId,
  isEditUserId,
  setIsEditProductId
}) => {
  const products = useSelector((state: RootState) => state.products)
  const getProductById = (id: string | null) => {
    if (id === null) return
    return products.find((product) => product.id === id)
  }
  // if isEditProductId is equal to number then fetch product by id
  // and set this product to useState
  const productById = getProductById(isEditProductId !== null ? isEditProductId : null)
  // if not use initProduct instead
  const [product, setProduct] = useState<IProduct>(
    isEditProductId !== null && productById ? productById : initProduct
  )
  const [user, setUser] = useState<IUser>(initUser)

  const dispatch = useDispatch()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    // Product changes
    if (isProduct) {
      if (name === 'category') {
        setProduct((prevProduct) => ({
          ...prevProduct,
          img: value
        }))
      }

      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value
      }))
    }
    // User changes
    if (!isProduct) {
      let convertedValue: string | boolean = value

      if (convertedValue === 'true') convertedValue = true
      if (convertedValue === 'false') convertedValue = false

      setUser((prevUser) => ({
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
      if (isEditProductId !== null) {
        dispatch(productsActions.editProductById(product))
        setIsVisible(false)
      }
      // add
      if (isEditProductId === null) {
        dispatch(productsActions.addProduct(product))
        setIsVisible(false)
      }
    }

    // handle user changes
    if (!isProduct) {
      // edit
      if (isEditUserId !== null) {
        console.log(user)

        // dispatch(productsActions.editProductById(product))
      }
      // add
      if (isEditUserId === null) {
        console.log(user)

        // dispatch(productsActions.addProduct(product))
      }
    }
  }

  return (
    <div
      className={`bg-red-400 py-5 fixed left-1/2 w-[55%] h-[95%] flex flex-col overflow-scroll scrollbar-hide transform -translate-x-1/2 -translate-y-1/2 blur-none transition-all duration-700 ${
        isVisible ? 'z-50 top-1/2' : 'top-[-100%]'
      }`}>
      {isProduct && (
        <ProductForm handleChange={handleChange} handleSubmit={handleSubmit} product={product} />
      )}
      {!isProduct && (
        <UserForm handleChange={handleChange} handleSubmit={handleSubmit} user={user} />
      )}
      <div className="absolute top-3 right-3">
        <button
          onClick={() => {
            setIsVisible(false)
            setIsEditProductId(null)
          }}>
          <CloseBtn className="text-3xl" />
        </button>
      </div>
    </div>
  )
}

export default AddEditComponent
