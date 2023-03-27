import React, { FC, useEffect, useState } from 'react'
import Button from '../../../components/Button'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

interface ICartProps {
  setProductId: (id: number) => void
}

const Cart: FC<ICartProps> = ({ setProductId }) => {
  const [total, setTotal] = useState('')
  const cartItems = useSelector((state: RootState) => state.cart)

  useEffect(() => {
    calculateTotalPrice()
  }, [cartItems])

  const calculateTotalPrice = () => {
    let total = 0
    cartItems.forEach((item) => {
      total += item.productPrice * item.amount
    })
    setTotal(total.toFixed(2))
  }

  const test = () => console.log(123)

  return (
    <div className="h-[85%] w-[80%]">
      {cartItems.length > 0 ? (
        <>
          <div className="flex border-b-2 ">
            <p className="w-[40%] text-start">PRODUCT</p>
            <p className="w-[19%]">PRICE</p>
            <p className="w-[19%]">AMOUNT</p>
            <p className="w-[19%]">SUBTOTAL</p>
          </div>
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.productId}
                itemId={item.productId}
                amount={item.amount}
                setProductId={setProductId}
              />
            )
          })}

          <div className="border-t-2 flex justify-end items-center">
            <div>
              <p>{total} $</p>
              <Button label="CHECKOUT" clickHandler={test} styles="bg-red-200" />
            </div>
          </div>
        </>
      ) : (
        <div>nothing</div>
      )}
    </div>
  )
}

export default Cart
