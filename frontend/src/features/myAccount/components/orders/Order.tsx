// packages
import { FC, useState } from 'react'
// components
import OrderDetails from './OrderDetails'
import { IOrder } from '../../../../types'
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
      <div className={`pl-[6%] py-8`} onClick={handleVisible}>
        <div className="flex justify-between my-2">
          <div className="flex w-full space-x-2 uppercase">
            <div className="w-1/3">
              <p className="underline underline-offset-1 font-[600]">ORDER NUMBER</p>
              <p>{order.orderId}</p>
            </div>
            <div className="w-1/3">
              <p className="underline underline-offset-1 font-[600]">STATUS</p>
              <p>{order.status}</p>
            </div>
            <div className="w-1/3">
              <p className="underline underline-offset-1 font-[600]">DATE</p>
              <p>{order.createdAt}</p>
            </div>
          </div>
          <div className="mr-7 p-2 text-3xl flex justify-center items-center">
            {isVisible ? <ArrowDown /> : <ArrowUp />}
          </div>
        </div>
      </div>
      <div className={`pl-[6%] border-b-[1px]`}>
        <OrderDetails products={order.products} isVisible={isVisible} />
      </div>
    </>
  )
}

export default Order
