import React, { FC, useState } from 'react'
import OrderDetails from './OrderDetails'
import { IOrder } from '../../../../types/order.type'
import { ArrowDown } from '../../../../assets/svg/ArrowDown'
import { ArrowUp } from '../../../../assets/svg/ArrowUp'

interface IOrderProps {
  order: IOrder
}

const Order: FC<IOrderProps> = ({ order }) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleVisible = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <>
      <div className={`pl-[10%] py-8`} onClick={handleVisible}>
        <div className="flex justify-between my-2">
          <div className="flex w-3/5 justify-between uppercase">
            <div>
              <p className="underline underline-offset-1 font-[600]">ORDER NUMBER</p>
              <p>{order.orderId}</p>
            </div>
            <div>
              <p className="underline underline-offset-1 font-[600]">STATUS</p>
              <p>{order.status}</p>
            </div>
            <div>
              <p className="underline underline-offset-1 font-[600]">DATE</p>
              <p>{order.purchasedAt}</p>
            </div>
          </div>
          <div className="mr-7 p-2 text-3xl flex justify-center items-center">
            {isVisible ? <ArrowDown /> : <ArrowUp />}
          </div>
        </div>
      </div>
      <div className={`pl-[10%] border-b-[1px]`}>
        <OrderDetails
          products={order.products}
          totalPrice={order.totalPrice}
          isVisible={isVisible}
        />
      </div>
    </>
  )
}

export default Order
