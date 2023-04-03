// packages
import { FC } from 'react'
import { useSelector } from 'react-redux'
// components
import { RootState } from '../../../../store/store'
import Order from './Order'
import { getOrdersByUserIdFromLS } from '../../../../utilities/localStorage'

const MyOrders: FC = () => {
  const userId = useSelector((state: RootState) => state.user.id)
  const orders = getOrdersByUserIdFromLS(userId)

  return (
    <>
      <div className="border-b-[1px] min-h-[7rem] pl-[6%] flex flex-col justify-center ">
        <h2 className="font-[600]">ORDERS</h2>
      </div>
      <div className="">
        {orders &&
          orders.map((order) => {
            return <Order key={order.orderId} order={order} />
          })}
      </div>
    </>
  )
}

export default MyOrders
