import React, { FC, useEffect, useState } from 'react'
import CartSide from './ProductSide'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useGetAllProductsWOImgQuery } from '../../../store/api/products.api'
import { IProduct } from '../../../types'
import UserInfoSide from './UserInfoSide'
import Button from '../../../components/Button'
import { useNavigate } from 'react-router-dom'

export type ICartItemsProduct = {
  amount: number
  product: IProduct
  productPrice: number
}

const Checkout: FC = () => {
  const [existingProducts, setExistingProducts] = useState<ICartItemsProduct[]>([])

  const cartItems = useSelector((state: RootState) => state.cart)
  const user = useSelector((state: RootState) => state.user)
  const { data, isLoading, isError } = useGetAllProductsWOImgQuery()

  const navigate = useNavigate()

  // fetch products from BE and
  // remove all not existing products
  useEffect(() => {
    if (data) {
      const updatedProducts: ICartItemsProduct[] = []
      cartItems.forEach((cartItem) => {
        const existingProduct = data.find((d) => d.productId === cartItem.productId)
        if (existingProduct) {
          const { productId, ...itemWithoutProductId } = cartItem // Destructure and omit 'productId'
          const updatedItem: ICartItemsProduct = {
            ...itemWithoutProductId,
            product: existingProduct
          } // Add 'product'
          updatedProducts.push(updatedItem)
        }
      })
      setExistingProducts(updatedProducts)
    }
  }, [isLoading])

  function handlePayMent(label: string): void {
    throw new Error('Function not implemented.')
  }

  const handleReturn = () => {
    navigate('/cart')
  }

  return (
    <div className="w-full h-[calc(100vh-103px-168px)] border-t-[1px] flex justify-between">
      <div className="w-[60%] border-r-[1px] pr-10 overflow-y-scroll">
        <UserInfoSide user={user} />
        <div className="flex flex-col items-start space-y-4">
          <Button
            clickHandler={handlePayMent}
            label="Complete payment"
            styles="w-[30%] bg-[#898e68] py-4 text-white text-lg"
          />
          <Button
            clickHandler={handleReturn}
            label="RETURN TO CART"
            styles="underline underline-offset-4 text-xl"
          />
        </div>
      </div>
      <div className="w-[40%]">
        {isLoading && <h1 className="col-span-full mx-auto my-4 text-4xl py-2 px-6">Loading...</h1>}
        {isError && (
          <h1 className="col-span-full mx-auto my-4 text-4xl py-2 px-6">Something went wrong...</h1>
        )}
        {!isLoading && !isError && <CartSide products={existingProducts} />}
      </div>
    </div>
  )
}

export default Checkout
