// packages
import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// components
import Button from '../../../components/Button'
import CartItem from './CartItem'
import { RootState } from '../../../store/store'
import { useNavigate } from 'react-router-dom'

interface ICartProps {
  setProductId: (id: string) => void
}

const Cart: FC<ICartProps> = ({ setProductId }) => {
  const [total, setTotal] = useState('')
  const cartItems = useSelector((state: RootState) => state.cart)

  const navigate = useNavigate()

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

  const checkoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className="h-full w-full mb-20">
      {cartItems.length > 0 ? (
        <>
          <div className="flex border-b-[1px] ">
            <h5 className="w-[29%] text-start text-gray">PRODUCT</h5>
            <h5 className="w-[23%] text-gray">PRICE</h5>
            <h5 className="w-[23%] text-gray">AMOUNT</h5>
            <h5 className="w-[23%] text-gray">SUBTOTAL</h5>
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
            <div className="mt-5 w-fit ">
              <div className="mb-1 flex justify-between font-[700] space-x-4">
                <h3>TOTAL</h3>
                <h3>{total} $</h3>
              </div>
              <Button
                label="CHECKOUT"
                clickHandler={checkoutHandler}
                styles="bg-[#a0a772] w-full py-[8px] mt-2 text-white"
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
