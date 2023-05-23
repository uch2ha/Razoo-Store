import React, { FC, useEffect, useState } from 'react'
import CartSide from './ProductSide'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useLazyGetProductByIdQuery } from '../../../store/api/products.api'
import { IProduct } from '../../../types'
import UserInfoSide from './UserInfoSide'
import Button from '../../../components/Button'
import { useNavigate } from 'react-router-dom'
import { cartActions } from '../../../store/cart/cart.slice'
import { useCreateOrderMutation } from '../../../store/api/orders.api'

export type ICartItemsProduct = {
  amount: number
  product: IProduct
}

export type ICreateOrder = {
  userId: string
  products: {
    productId: string
    quantity: number
  }[]
}

const Checkout: FC = () => {
  const [fetchedItems, setFetchedItems] = useState<ICartItemsProduct[]>([])

  const cartItems = useSelector((state: RootState) => state.cart)
  const user = useSelector((state: RootState) => state.user)

  const [triggerGetProductById] = useLazyGetProductByIdQuery()
  const [triggerCreateOrder] = useCreateOrderMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // check if product exist
  // if yes, add it to new array
  // if no, delete from cart
  useEffect(() => {
    const fetchData = async () => {
      const updatedItems: ICartItemsProduct[] = []
      for (const item of cartItems) {
        const { data } = await triggerGetProductById(item.productId)
        if (data) {
          updatedItems.push({ amount: item.amount, product: data })
        } else {
          dispatch(cartActions.removeItem(item.productId))
        }
      }
      setFetchedItems(updatedItems)
    }

    fetchData()
  }, [cartItems])

  const handlePayMent = () => {
    if (cartItems && user.userId) {
      const orderRequest: ICreateOrder = { userId: user.userId, products: [] }
      cartItems.forEach((item) => {
        orderRequest.products.push({ productId: item.productId, quantity: item.amount })
      })

      triggerCreateOrder(orderRequest)
    }
  }

  const handleReturn = () => {
    navigate('/cart')
  }

  return (
    <div className="w-full h-[calc(100vh-103px-168px)] border-t-[1px] flex justify-between">
      <div className="w-[60%] border-r-[1px] pr-10 overflow-y-scroll">
        <UserInfoSide user={user} />
        <div className="flex flex-col items-start space-y-4 mb-12">
          <Button
            clickHandler={handlePayMent}
            label="Complete payment"
            styles="w-fit bg-[#898e68] py-4 px-10 text-white text-lg"
          />
          <Button
            clickHandler={handleReturn}
            label="RETURN TO CART"
            styles="underline underline-offset-4 text-xl"
          />
        </div>
      </div>
      <div className="w-[40%]">{fetchedItems && <CartSide products={fetchedItems} />}</div>
    </div>
  )
}

export default Checkout
