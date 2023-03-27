import React, { FC, memo } from 'react'
import { CloseBtn } from '../../../assets/svg/CloseBtn'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../store/cart/cart.slice'
import { RootState } from '../../../store/store'
import { getProductByIdFromLS } from '../../../utilities/localStorage'
import { MinusBtn } from '../../../assets/svg/MinusBtn'
import { PlusBtn } from '../../../assets/svg/PlusBtn'

const img = 'shampoo'

interface ICartItemProps {
  itemId: number
  amount: number
  setProductId: (id: number) => void
}

const CartItem: FC<ICartItemProps> = ({ itemId, amount, setProductId }) => {
  const products = getProductByIdFromLS(itemId)
  const dispatch = useDispatch()

  const calculateTotalPrice = () => {
    if (products) {
      const totalPrice = (products.price * amount).toFixed(2)
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
    <div className="py-6 my-[3px]  border-b-2 flex items-center justify-center">
      <div className="w-[29%] h-[150px] flex items-center btn" onClick={() => setProductId(itemId)}>
        <div className="border-2">
          <img src={`./src/assets/productImg/${img}.png`} className="max-w-[150px]" />
        </div>
        <div className="h-full ml-3 flex flex-col justify-evenly items-start uppercase text-start">
          <div>
            <h3>{products?.name}</h3>
            <h3>{products?.category}</h3>
          </div>
          <p>{products?.size}</p>
        </div>
      </div>
      <div className="w-[23%]">
        <p className="text-[22px] font-[500]">{products?.price} $</p>
      </div>
      <div className="w-[23%]">
        <div className="w-fit flex justify-center items-center border-2 mx-auto">
          <button className="px-[10px]" onClick={handleDecrement}>
            <MinusBtn className="text-2xl" />
          </button>
          <p className="w-8 text-[22px] font-[500]">{amount}</p>
          <button className="px-[10px]" onClick={handleIncrement}>
            <PlusBtn className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="w-[23%]">
        <p className="text-[22px] font-[500]">{calculateTotalPrice()} $</p>
      </div>
      <div className="w-[2%] flex justify-end items-center" onClick={handleRemove}>
        <CloseBtn className="text-4xl btn" />
      </div>
    </div>
  )
}

export default CartItem
