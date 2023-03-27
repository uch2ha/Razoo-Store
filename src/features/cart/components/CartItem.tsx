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
    <div className="py-6 my-[3px] border-b-2 flex items-center justify-center">
      <div className="w-[40%] flex items-center btn" onClick={() => setProductId(itemId)}>
        <div className="border-2 min-w-[100px] max-w-[100px] max-w-min-[100px]">
          <img src={`./src/assets/productImg/${img}.png`} />
        </div>
        <div className="ml-3 flex flex-col items-start uppercase text-start">
          <p>{products?.name}</p>
          <p>{products?.category}</p>
          <p>{products?.size}</p>
        </div>
      </div>
      <div className="w-[19%]">{products?.price}$</div>
      <div className="w-[19%]">
        <div className="w-fit flex justify-center items-center border-2 mx-auto">
          <button className="px-[12px]" onClick={handleDecrement}>
            <MinusBtn />
          </button>
          <p className="w-8">{amount}</p>
          <button className="px-[12px]" onClick={handleIncrement}>
            <PlusBtn />
          </button>
        </div>
      </div>
      <div className="w-[19%]">{calculateTotalPrice()}$</div>
      <div className="w-[3%] flex justify-center items-center" onClick={handleRemove}>
        <CloseBtn className="text-3xl" />
      </div>
    </div>
  )
}

export default CartItem
