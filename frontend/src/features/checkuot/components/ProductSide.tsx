import React, { FC } from 'react'
import CartRow from './ProductRow'
import { ICartItemsProduct } from './Checkout'

interface ICardSide {
  products: ICartItemsProduct[]
}

const SHIPPING_PRICE = 14

const CartSide: FC<ICardSide> = ({ products }) => {
  const subTotal = products
    .reduce((sum, product) => sum + product.productPrice * product.amount, 0)
    .toFixed(2)

  const totalPrice = (parseFloat(subTotal) + SHIPPING_PRICE).toFixed(2)

  return (
    <div className="pl-6 h-full w-full overflow-y-scroll">
      {products &&
        products.map((item) => {
          return (
            <CartRow key={item.product.productId} product={item.product} amount={item.amount} />
          )
        })}
      <div className="flex justify-between py-6 border-b-[1px]">
        <div className="space-y-2">
          <p>SUBTOTAL</p>
          <p>SHIPPING</p>
        </div>
        <div className="space-y-2 font-bold text-right">
          <p>{subTotal} $</p>
          <p>{SHIPPING_PRICE} $</p>
        </div>
      </div>
      <div className="flex justify-between py-6 font-bold mt-[3px] border-t-[1px]">
        <p>TOTAL</p>
        <p>{totalPrice} $</p>
      </div>
    </div>
  )
}

export default CartSide
