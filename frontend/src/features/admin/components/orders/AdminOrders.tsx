import { FC, useEffect, useState } from 'react'
import { useOrderDataFilter } from '../../../myAccount/hooks/useOrderDataFiler'
import { useLazyGetAllOrdersByUserIdQuery } from '../../../../store/api/orders.api'
import { IOrder } from '../../../../types'
import Order from '../../../myAccount/components/orders/Order'
import { useGetAllUserIdsQuery } from '../../../../store/api/users.api'

type IAllUsersOrders = {
  userId: string
  orders: IOrder[]
}

const AdminOrders: FC = () => {
  const [userIds, setUserIds] = useState<string[]>([])
  const [allUsersOrders, setAllUsersOrders] = useState<IAllUsersOrders[]>([])

  const { data, isLoading, isError } = useGetAllUserIdsQuery()
  const [trigger] = useLazyGetAllOrdersByUserIdQuery()

  useEffect(() => {
    if (data) {
      setUserIds(data)
    }
  }, [isLoading])

  // fetch all userOrder's data by userId
  useEffect(() => {
    if (!userIds) return

    userIds.forEach(async (id) => {
      const { data: userOrders } = await trigger(id)

      if (!userOrders) return

      const orders = useOrderDataFilter(userOrders)

      const result: IAllUsersOrders = { userId: id, orders }

      setAllUsersOrders((prev) => [...prev, result])
    })
  }, [userIds])

  return (
    <div className="flex justify-center items-center text-3xl mt-20">
      <div className="w-[82%]">
        {isLoading && <h2 className="col-span-full mx-auto my-4 text-4xl py-2 px-6">Loading...</h2>}
        {isError && (
          <h2 className="col-span-full mx-auto my-4 text-4xl py-2 px-6">Something went wrong...</h2>
        )}
        {allUsersOrders && (
          <div className="flex flex-col items-center justify-start text-xl">
            {allUsersOrders.map((user) => {
              return (
                <div key={user.userId} className="border-[1px] mb-8 w-full">
                  <p className="text-center py-4">{user.userId}</p>
                  <div>
                    {user.orders?.map((order) => {
                      return <Order key={order.orderId} order={order} />
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminOrders
