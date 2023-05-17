// packages
import { FC } from 'react'
import { useSelector } from 'react-redux'
// components
import { RootState } from '../../../../store/store'
import Image from '../../../../Image'

interface IOrderDetailsRowProps {
  itemId: string
  amount: number
}

const OrderDetailsRow: FC<IOrderDetailsRowProps> = ({ itemId, amount }) => {
  const products = useSelector((state: RootState) => state.products)
  const getProductById = (id: string | null) => {
    if (id === null) return
    return products.find((product) => product.productId === id)
  }
  const product = getProductById(itemId)
  return (
    <>
      <div className="col-span-3 border-b-[1px] py-5 px-2 flex justify-start items-center ">
        {product?.img && <Image src={product?.img} alt="My Image" className="w-[30%]" />}
        <p className="mx-auto">{product?.name}</p>
      </div>
      <div className="col-span-2 border-b-[1px] border-l-[1px] border-r-[1px] py-5 flex justify-center items-center">
        <p>{product?.size}</p>
      </div>
      <div className="col-span-2 border-b-[1px]  border-r-[1px] py-5 flex justify-center items-center">
        <p>{amount}X</p>
      </div>
      <div className="col-span-2 border-b-[1px] py-5 flex justify-center items-center">
        <p>{product?.price} $</p>
      </div>
    </>
  )
}

export default OrderDetailsRow
