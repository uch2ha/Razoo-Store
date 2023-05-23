import React, { FC } from 'react'
import { IProduct } from '../../../types'

interface ICartRow {
  product: IProduct
  amount: number
}

const CartRow: FC<ICartRow> = ({ product, amount }) => {
  return (
    <div className="flex text-center border-b-[1px] py-6">
      <div className="w-[40%] text-left">
        <p>{product.name}</p>
      </div>
      <div className="w-[20%] text-center">
        <p>{product.size}</p>
      </div>
      <div className="w-[20%] text-center">
        <p>x{amount}</p>
      </div>
      <div className="w-[20%] text-right font-bold">
        <p>{(product.price * amount).toFixed(2)} $</p>
      </div>
    </div>
  )
}

export default CartRow
