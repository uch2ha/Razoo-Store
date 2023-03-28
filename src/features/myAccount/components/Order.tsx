import React, { FC, useState } from 'react'
import OrderDetails from './OrderDetails'
import { IOrder } from '../../../types/order.type'

interface IOrderProps {
  order: IOrder
}

const Order: FC<IOrderProps> = ({ order }) => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="pl-[10%] border-b-2  py-10">
      <div className="flex justify-between">
        <div className="flex w-3/5 justify-between uppercase">
          <div>
            <p className="underline underline-offset-1">ORDER NUMBER</p>
            <p>{order.orderId}</p>
          </div>
          <div>
            <p className="underline underline-offset-1">STATUS</p>
            <p>{order.status}</p>
          </div>
          <div>
            <p className="underline underline-offset-1">DATE</p>
            <p>{order.purchasedAt}</p>
          </div>
        </div>
        <div className="mr-10 flex justify-center items-center">asd</div>
      </div>
      <OrderDetails products={order.products} totalPrice={order.totalPrice} />
    </div>
  )
}

export default Order
