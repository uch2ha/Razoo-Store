import React, { FC } from 'react'
import { CloseBtn } from '../../../assets/svg/CloseBtn'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../store/cart/cart.slice'
import { RootState } from '../../../store/store'
import { MinusBtn } from '../../../assets/svg/MinusBtn'
import { PlusBtn } from '../../../assets/svg/PlusBtn'

interface ICartItemProps {
  itemId: string
  amount: number
  setProductId: (id: string) => void
}

const CartItem: FC<ICartItemProps> = ({ itemId, amount, setProductId }) => {
  const products = useSelector((state: RootState) => state.products)
  const getProductById = (id: string | null) => {
    if (id === null) return
    return products.find((product) => product.id === id)
  }

  const product = getProductById(itemId)
  const dispatch = useDispatch()

  const calculateTotalPrice = () => {
    if (product) {
      const totalPrice = (product.price * amount).toFixed(2)
      return totalPrice
    }
    return NaN
  }

  const handleIncrement = () => {
    dispatch(cartActions.increaseItemAmount(itemId))
  }
  const handleDecrement = () => {
    dispatch(cartActions.decreaseItemAmount(itemId))
  }
  const handleRemove = () => {
    dispatch(cartActions.removeItem(itemId))
  }

  return (
    <div className="py-6 my-[3px]  border-b-[1px] flex items-center justify-center">
      <div
        className="w-[29%] h-[150px] flex items-center justify-between btn"
        onClick={() => setProductId(itemId)}>
        <div className="h-full border-[1px]">
          <img src={`./assets/productImg/${product?.img}.png`} className="h-[95%]" />
        </div>
        <div className="h-full ml-3 flex flex-col justify-evenly items-end uppercase text-end">
          <div className="font-[500]">
            <h3>{product?.name}</h3>
            <h3>{product?.category}</h3>
          </div>
          <p>{product?.size}</p>
        </div>
      </div>
      <div className="w-[23%]">
        <p className="text-[22px] font-[700]">{product?.price} $</p>
      </div>
      <div className="w-[23%]">
        <div className="w-fit flex justify-center items-center border-[1px] mx-auto">
          <button className="px-[10px]" onClick={handleDecrement}>
            <MinusBtn className="text-2xl" />
          </button>
          <p className="w-8 text-[22px] font-[600]">{amount}</p>
          <button className="px-[10px]" onClick={handleIncrement}>
            <PlusBtn className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="w-[23%]">
        <p className="text-[22px] font-[700]">{calculateTotalPrice()} $</p>
      </div>
      <div className="w-[2%] flex justify-end items-center" onClick={handleRemove}>
        <CloseBtn className="text-4xl btn" />
      </div>
    </div>
  )
}

export default CartItem
