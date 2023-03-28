import React, { FC } from 'react'
import { getProductByIdFromLS } from '../../../utilities/localStorage'

interface IOrderDetailsRowProps {
  itemId: number
  amount: number
}

const OrderDetailsRow: FC<IOrderDetailsRowProps> = ({ itemId, amount }) => {
  const product = getProductByIdFromLS(itemId)
  return (
    <>
      <div className="col-span-3 border-b-2 py-5">{product?.name}</div>
      <div className="col-span-2 border-b-2 border-l-2 border-r-2 py-5">{product?.size}</div>
      <div className="col-span-2 border-b-2  border-r-2 py-5">{amount}X</div>
      <div className="col-span-2 border-b-2 py-5">{product?.price} $</div>
    </>
  )
}

export default OrderDetailsRow
