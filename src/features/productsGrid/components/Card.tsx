import React, { FC } from 'react'

import img from '../../../assets/shampoo_test.png'

interface ICardProps {
  name: string
  category: 'shampoo' | 'hairConditioner' | 'hairMask' | 'hairOil'
  size: '10ml' | '25ml' | '50ml' | '100ml'
  price: number
}

const Card: FC<ICardProps> = ({ name, category, size, price }) => {
  return (
    <div className="flex flex-col items-center border-2 rounded-md">
      <img src={img} className="h-[300px] mb-[-30px]" />
      <p className="text-2xl">{name}</p>
      <p className="text-2xl">
        {category} ({size})
      </p>
      <p className="text-xl font-bold mt-6">{price}$</p>
      <button className="border-2 w-[90%] my-3 py-2">Add to Cart</button>
    </div>
  )
}

export default Card
