import React, { FC, useEffect, useState } from 'react'

import { CloseBtn } from '../assets/svg/CloseBtn'
import { IProduct } from '../types/product.type'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cart/cart.slice'
import { RootState } from '../store/store'

interface IItemDetailsProps {
  handleClose: () => void
  productId: string | null
  isVisible: boolean
}

const initState: IProduct = {
  id: '',
  img: 'none',
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

  const getProductById = (id: string) => {
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
      <div className="w-[52%] bg-[#eceae5] -tl-md -bl-md flex justify-center items-center">
        {productId && (
          <img src={`./src/assets/productImg/${product.img}.png`} className="h-[70%]" />
        )}
        <img src={'./src/assets/logo-column.png'} className="absolute top-7 left-7 w-[90px]" />
      </div>
      <div className="w-[48%] bg-[#f2f3f1] flex justify-center items-center -tr-md -br-md">
        <div className="h-[80%] w-[75%] mx-auto">
          <div className="border-b-[2px]  h-1/3 flex flex-col justify-end px-[8%]">
            <div className="text-3xl pb-[5%] uppercase font-[500]">
              <p>{product.name}</p>
              <p>{product.category}</p>
            </div>
            <p className="text-2xl pb-4">
              {product.price}$ &nbsp;&nbsp;|&nbsp;&nbsp; <span>{product.size}</span>
            </p>
          </div>
          <div className="px-[8%] h-2/3 flex flex-col justify-start items-start">
            <div className="py-8 xl:text-lg lg:text-base">
              <p>{product.description}</p>
              <p className="pb-[5%]">{product.instruction}</p>
            </div>
            <Button
              label="ADD TO CART"
              clickHandler={handleAddItem}
              styles="border-[1px] px-20 py-4 bg-[#301001] text-white"
            />
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
