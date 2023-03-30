import React, { FC } from 'react'
import OrderDetailsRow from './OrderDetailsRow'

interface IOrderDetailsProps {
  products: {
    productId: string
    amount: number
  }[]
  totalPrice: number
  isVisible: boolean
}

const OrderDetails: FC<IOrderDetailsProps> = ({ products, totalPrice, isVisible }) => {
  return (
    <div
      className={`grid grid-cols-9 w-[80%] text-center max-h-0 transition-all ease-in-out duration-700 overflow-hidden ${
        isVisible ? 'border-[1px] max-h-full my-10' : ''
      }`}>
      <div className="col-span-3 border-b-[1px] py-1">
        <p>PRODUCT</p>
      </div>
      <div className="col-span-2 border-b-[1px] border-l-[1px] border-r-[1px] py-1">
        <p>SIZE</p>
      </div>
      <div className="col-span-2 border-b-[1px] border-r-[1px] py-1">
        <p>AMOUNT</p>
      </div>
      <div className="col-span-2 border-b-[1px] py-1">
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
      <div className="col-span-9 text-right py-3 mr-5">
        <p className="underline underline-offset-2">Total: {totalPrice} $</p>
      </div>
    </div>
  )
}

export default OrderDetails
