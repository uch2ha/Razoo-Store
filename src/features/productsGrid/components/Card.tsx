import React, { FC, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/cart/cart.slice'

// import img from '../../../assets/productImg/shampoo.png'

const img = 'shampoo'

interface ICardProps {
  id: number
  name: string
  category: 'shampoo' | 'hairConditioner' | 'hairMask' | 'hairOil'
  size: '50ml' | '100ml' | '150ml' | '200ml'
  price: number
  setProductId: (id: number) => void
}

const Card: FC<ICardProps> = ({ id, name, category, size, price, setProductId }) => {
  const dispatch = useDispatch()

  const handleClick = (e: MouseEvent) => {
    if ((e.target as HTMLDivElement).id === 'add-to-cart')
      return dispatch(cartActions.addItem({ id, price }))
    setProductId(id)
  }

  return (
    <div
      className="flex flex-col justify-between items-center border-2 rounded-md shadow-lg hover:scale-[1.015] btn"
      onClick={handleClick}>
      <div className="w-full flex flex-col items-center">
        <img src={`./src/assets/productImg/${img}.png`} className="h-[300px] mb-[-30px]" />
        <p className="text-2xl">{name}</p>
        <p className="text-2xl">
          {category} ({size})
        </p>
      </div>
      <div className="w-full">
        <p className="text-xl font-bold mt-6">{price}$</p>
        <button id="add-to-cart" className="border-2 w-[90%] my-3 py-2 hover:bg-red-400">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Card
