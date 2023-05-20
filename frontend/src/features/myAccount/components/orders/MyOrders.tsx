// packages
import { FC } from 'react'
// components
import Order from './Order'
import { useGetAllMineOrdersQuery } from '../../../../store/api/orders.api'
import { useOrderDataFilter } from '../../hooks/useOrderDataFiler'
import { IOrder } from '../../../../types'

const MyOrders: FC = () => {
  const { data, isLoading, isError } = useGetAllMineOrdersQuery()
  let orders: IOrder[] = []

  if (data) {
    orders = useOrderDataFilter(data)
  }

  return (
    <>
      <div className="border-b-[1px] min-h-[7rem] pl-[6%] flex flex-col justify-center ">
        <h2 className="font-[600]">ORDERS</h2>
      </div>
      <div className="">
        {isLoading && <h2 className="col-span-full mx-auto my-4 text-4xl py-2 px-6">Loading...</h2>}
        {isError && (
          <h2 className="col-span-full mx-auto my-4 text-4xl py-2 px-6">Something went wrong...</h2>
        )}
        {!isLoading &&
          !isError &&
          orders?.map((order) => {
            return <Order key={order.orderId} order={order} />
          })}
      </div>
    </>
  )
}

export default MyOrders
