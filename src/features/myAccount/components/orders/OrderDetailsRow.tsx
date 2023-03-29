import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'

interface IOrderDetailsRowProps {
  itemId: number
  amount: number
}

const OrderDetailsRow: FC<IOrderDetailsRowProps> = ({ itemId, amount }) => {
  const products = useSelector((state: RootState) => state.products)
  const getProductById = (id: number | null) => {
    if (id === null) return
    return products.find((product) => product.id === id)
  }
  const product = getProductById(itemId)
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
