import React, { FC, useEffect, useState } from 'react'
import Button from '../../../components/Button'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { withItemDetails } from '../../../HoC/withItemDetails'

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
    <div className="h-full w-full">
      {cartItems.length > 0 ? (
        <>
          <div className="flex border-b-2">
            <h5 className="w-[29%] text-start">PRODUCT</h5>
            <h5 className="w-[23%]">PRICE</h5>
            <h5 className="w-[23%]">AMOUNT</h5>
            <h5 className="w-[23%]">SUBTOTAL</h5>
          </div>
          <div>
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
          </div>

          <div className="border-t-2 flex justify-end items-center">
            <div className="mt-5 w-[19%] ">
              <div className="mb-1 flex justify-between font-[500]">
                <h3>TOTAL</h3>
                <h3>{total} $</h3>
              </div>
              <Button label="CHECKOUT" clickHandler={test} styles="bg-red-200 w-full py-[8px]" />
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
