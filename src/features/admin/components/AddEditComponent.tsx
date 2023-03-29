import React, { FC, useState } from 'react'
import { IProduct } from '../../../types/product.type'
import { CloseBtn } from '../../../assets/svg/CloseBtn'
import ProductForm from './products/ProductForm'
import { getProductByIdFromLS } from '../../../utilities/localStorage'

const initProduct: IProduct = {
  id: 0,
  name: '',
  description: '',
  instruction: '',
  category: 'shampoo',
  size: '50ml',
  price: 0
}

interface IAddEditComponentProps {
  isVisible: boolean
  setIsVisible: (b: boolean) => void
  isProduct: boolean
  isEditProductId: number | null
  setIsEditProductId: (b: number | null) => void
}

const AddEditComponent: FC<IAddEditComponentProps> = ({
  isVisible,
  setIsVisible,
  isProduct,
  isEditProductId,
  setIsEditProductId
}) => {
  // if isEditProductId is equal to number then fetch product by id
  // and set this product to useState
  const productById = getProductByIdFromLS(isEditProductId !== null ? isEditProductId : 0)
  // if not use initProduct instead
  const [product, setProduct] = useState<IProduct>(
    isEditProductId !== null && productById ? productById : initProduct
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    console.log(name, value)

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log(product)
  }

  return (
    <div
      className={`bg-red-400 py-5 fixed left-1/2 w-[55%] h-[95%] flex flex-col overflow-scroll scrollbar-hide transform -translate-x-1/2 -translate-y-1/2 blur-none transition-all duration-700 ${
        isVisible ? 'z-50 top-1/2' : 'top-[-100%]'
      }`}>
      {isProduct && (
        <ProductForm handleChange={handleChange} handleSubmit={handleSubmit} product={product} />
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
