// packages
import React, { FC, useState } from 'react'
// components
import { IProduct } from '../../../types'
import { CloseBtn } from '../../../assets/svg/CloseBtn'
import ProductForm from './products/ProductForm'
import UserForm from './users/UserForm'
import { IUser } from '../../../types'
import {
  useEditProductMutation,
  useSaveProductMutation,
  useUploadProductImageMutation
} from '../../../store/api/products.api'
import { useEditUserMutation, useSaveUserMutation } from '../../../store/api/users.api'
import { IServerProduct } from './products/AdminProducts'
import { useDispatch } from 'react-redux'
import { productsActions } from '../../../store/products/products.slice'
import { useGetProductImg } from '../../../hooks/useGetProductImg'
import { popUpError1100ms, popUpSuccess1100ms } from '../../../components/notifications'
import { ShowConfirmation } from '../../../components/PopUpConfirmation'

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
  const [triggerUploadImg] = useUploadProductImageMutation()

  const dispatch = useDispatch()

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

  const askConfirmation = (e: React.FormEvent<HTMLFormElement>, img?: FormData) => {
    ShowConfirmation((confirmed) => {
      if (confirmed) handleSubmit(e, img)
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, img?: FormData) => {
    e.preventDefault()

    // handle product changes
    if (isProduct) {
      // edit
      if (isEditMod) {
        if ('productId' in item && img) {
          if (item?.productId) {
            const res = await triggerUploadImg({ productId: item.productId, formData: img })

            if ('data' in res) {
              popUpSuccess1100ms('Image has been uploaded')
            } else {
              popUpError1100ms('Image was not uploaded')
            }
          }
        }
        const res = await triggerEditProduct(item as IServerProduct)
        if ('data' in res) {
          const imgUrl = await useGetProductImg(res.data.productId)
          const updatedData = {
            ...res.data,
            imgBlob: ''
          }
          if (imgUrl) {
            updatedData.imgBlob = imgUrl
          }
          dispatch(productsActions.editProductById(updatedData))
          popUpSuccess1100ms('Succeed')
        } else {
          popUpError1100ms('Something went wrong')
        }
      }
      // add
      if (!isEditMod) {
        const res = await triggerSaveProduct(item as IServerProduct)
        if ('data' in res) {
          const imgUrl = await useGetProductImg(res.data.productId)
          const updatedData = {
            ...res.data,
            imgBlob: ''
          }
          if (imgUrl) {
            updatedData.imgBlob = imgUrl
          }
          dispatch(productsActions.addProduct(updatedData))
          popUpSuccess1100ms('Succeed')
        } else {
          popUpError1100ms('Something went wrong')
        }
      }
    }

    // handle user changes
    if (!isProduct) {
      // edit
      if (isEditMod) {
        const res = await triggerEditUser(item as IUser)
        if ('data' in res) {
          popUpSuccess1100ms('Succeed')
        } else {
          popUpError1100ms('Something went wrong')
        }
      }
      // add
      if (!isEditMod) {
        const res = await triggerSaveUser(item as IUser)
        if ('data' in res) {
          popUpSuccess1100ms('Succeed')
        } else {
          popUpError1100ms('Something went wrong')
        }
      }
    }
    handleClose()
  }

  return (
    <div
      className={`fixed left-1/2 w-[55%] h-fit py-5 flex flex-col bg-[#898e68] overflow-scroll scrollbar-hide transform -translate-x-1/2 -translate-y-1/2 blur-none transition-all duration-700 ${
        isVisible ? 'z-50 top-1/2' : 'top-[-100%]'
      }`}>
      {isProduct && (
        <ProductForm
          handleChange={handleChange}
          handleSubmit={askConfirmation}
          product={item as IServerProduct}
        />
      )}
      {!isProduct && (
        <UserForm handleChange={handleChange} handleSubmit={askConfirmation} user={item as IUser} />
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
