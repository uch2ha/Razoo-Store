import React, { FC, useEffect, useState } from 'react'

import { CloseBtn } from '../assets/svg/CloseBtn'
import { IProduct } from '../types/product.type'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cart/cart.slice'
import { productsActions } from '../store/products/products.slice'
import { RootState } from '../store/store'

interface IItemDetailsProps {
  handleClose: () => void
  productId: number | null
  isVisible: boolean
}

const initState: IProduct = {
  id: 0,
  name: 'Loading...',
  description: 'Loading...',
  instruction: 'Loading...',
  category: 'shampoo',
  size: '50ml',
  price: 100
}

const ItemDetails: FC<IItemDetailsProps> = ({ handleClose, productId, isVisible }) => {
  const [product, setProduct] = useState<IProduct>(initState)

  const dispatch = useDispatch()

  // get product list from store
  const products = useSelector((state: RootState) => state.products)

  useEffect(() => {
    if (productId !== null) getProductById(productId)
  }, [productId])

  const getProductById = (id: number) => {
    const product = products.filter((product) => product.id === id)
    setProduct(product[0])
  }

  const handleAddItem = () => {
    const { id, price } = product
    dispatch(cartActions.addItem({ id, price }))
  }

  return (
    <div
      className={`fixed left-1/2 w-[85%] h-[80%] flex transform -translate-x-1/2 -translate-y-1/2 blur-none transition-all duration-700 ${
        isVisible ? 'z-50 top-1/2 ' : 'top-[-100%]'
      }`}>
      <div className="w-[52%] bg-red-300 rounded-tl-md rounded-bl-md flex justify-center items-center">
        <img src={`./src/assets/productImgs/${productId}.png`} className="w-[90%]" />
      </div>
      <div className="w-[48%] bg-red-700 flex justify-center items-center rounded-tr-md rounded-br-md">
        <div className="h-[80%] w-[80%] mx-auto">
          <div className="border-b-2 h-1/3 flex flex-col justify-end px-[10%]">
            <div className="text-3xl pb-[5%] uppercase">
              <p>{product.name}</p>
              <p>{product.category}</p>
            </div>
            <p className="text-2xl pb-4">
              {product.price}$ | <span>{product.size}</span>
            </p>
          </div>
          <div className="px-[10%] h-2/3 flex flex-col justify-start items-start">
            <div className="py-8 xl:text-lg lg:text-base">
              <p>{product.description}</p>
              <p className="pb-[5%]">{product.instruction}</p>
            </div>
            <Button label="ADD TO CART" clickHandler={handleAddItem} styles="border-2 px-20 py-4" />
          </div>
        </div>
        <div className="fixed top-5 right-5">
          <button onClick={handleClose}>
            <CloseBtn className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails
