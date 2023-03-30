import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
import Order from './Order'
import { getOrdersByUserIdFromLS } from '../../../../utilities/localStorage'

const MyOrders: FC = () => {
  const userId = useSelector((state: RootState) => state.user.id)
  const orders = getOrdersByUserIdFromLS(userId)

  return (
    <>
      <div className="border-b-2 min-h-[7rem] pl-[10%] flex flex-col justify-center ">
        <h2>ORDERS</h2>
      </div>
      <div>
        {orders &&
          orders.map((order) => {
            return <Order key={order.orderId} order={order} />
          })}
      </div>
    </>
  )
}

export default MyOrders
