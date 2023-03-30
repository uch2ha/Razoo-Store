import React, { FC, useEffect, useState } from 'react'
import Button from '../../../components/Button'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

interface ICartProps {
  setProductId: (id: string) => void
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
    <div className="h-full w-full mb-20">
      {cartItems.length > 0 ? (
        <>
          <div className="flex border-b-[1px] ">
            <h5 className="w-[29%] text-start text-[#666666]">PRODUCT</h5>
            <h5 className="w-[23%] text-[#666666]">PRICE</h5>
            <h5 className="w-[23%] text-[#666666]">AMOUNT</h5>
            <h5 className="w-[23%] text-[#666666]">SUBTOTAL</h5>
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

          <div className="border-t-[1px] flex justify-end items-center">
            <div className="mt-5 w-[19%] ">
              <div className="mb-1 flex justify-between font-[700]">
                <h3>TOTAL</h3>
                <h3>{total} $</h3>
              </div>
              <Button
                label="CHECKOUT"
                clickHandler={test}
                styles="bg-[#a0a772] w-full py-[8px] text-white"
              />
            </div>
          </div>
        </>
      ) : (
        <div>
          <p className="text-2xl">Shopping time!</p>
        </div>
      )}
    </div>
  )
}

export default Cart
