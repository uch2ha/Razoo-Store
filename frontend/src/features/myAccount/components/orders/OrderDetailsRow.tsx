// packages
import { FC } from 'react'
// components
import { IOrderProduct } from '../../../../types'

interface IOrderDetailsRowProps {
  product: IOrderProduct
}

const OrderDetailsRow: FC<IOrderDetailsRowProps> = ({ product }) => {
  return (
    <>
      <div className="col-span-3 border-b-[1px] py-5 px-2 flex justify-start items-center ">
        {product?.img && <img src={product?.img} alt="My Image" className="w-[30%]" />}
        <p className="mx-auto">{product?.name}</p>
      </div>
      <div className="col-span-2 border-b-[1px] border-l-[1px] border-r-[1px] py-5 flex justify-center items-center">
        <p>{product?.size}</p>
      </div>
      <div className="col-span-2 border-b-[1px]  border-r-[1px] py-5 flex justify-center items-center">
        <p>{product.quantity}X</p>
      </div>
      <div className="col-span-2 border-b-[1px] py-5 flex justify-center items-center">
        <p>{product?.price} $</p>
      </div>
    </>
  )
}

export default OrderDetailsRow
