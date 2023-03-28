import React, { FC } from 'react'
import OrderDetailsRow from './OrderDetailsRow'
import { IProduct } from '../../../types/product.type'

interface IOrderDetailsProps {
  products: {
    productId: number
    amount: number
  }[]
  totalPrice: number
}

const OrderDetails: FC<IOrderDetailsProps> = ({ products, totalPrice }) => {
  return (
    <div className="mt-10 grid grid-cols-9 w-[80%] border-2 text-center">
      <div className="col-span-3 border-b-2">
        <p>PRODUCT</p>
      </div>
      <div className="col-span-2 border-b-2 border-l-2 border-r-2">
        <p>SIZE</p>
      </div>
      <div className="col-span-2 border-b-2 border-r-2">
        <p>AMOUNT</p>
      </div>
      <div className="col-span-2 border-b-2">
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
      <div className="col-span-9 text-right">
        <p>Total: {totalPrice} $</p>
      </div>
    </div>
  )
}

export default OrderDetails
