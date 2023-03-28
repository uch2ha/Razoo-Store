import React, { FC } from 'react'
import OrderDetailsRow from './OrderDetailsRow'
import { IProduct } from '../../../types/product.type'

interface IOrderDetailsProps {
  products: {
    productId: number
    amount: number
  }[]
  totalPrice: number
  isVisible: boolean
}

const OrderDetails: FC<IOrderDetailsProps> = ({ products, totalPrice, isVisible }) => {
  return (
    <div
      className={`grid grid-cols-9 w-[80%] text-center max-h-0 transition-all ease-in-out duration-700 overflow-hidden ${
        isVisible ? 'border-2 max-h-full mt-10' : ''
      }`}>
      <div className="col-span-3 border-b-2 py-1">
        <p>PRODUCT</p>
      </div>
      <div className="col-span-2 border-b-2 border-l-2 border-r-2 py-1">
        <p>SIZE</p>
      </div>
      <div className="col-span-2 border-b-2 border-r-2 py-1">
        <p>AMOUNT</p>
      </div>
      <div className="col-span-2 border-b-2 py-1">
        <p>PRICE</p>
      </div>
      {products?.map((product) => {
        return (
          <OrderDetailsRow
            key={product.productId}
            itemId={product.productId}
            amount={product.amount}
          />
        )
      })}
      <div className="col-span-9 text-right py-3">
        <p className="underline underline-offset-2">Total: {totalPrice} $</p>
      </div>
    </div>
  )
}

export default OrderDetails
