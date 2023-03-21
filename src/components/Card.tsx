import React, { FC } from 'react'

import img from '../assets/shampoo_test.png'

const Card: FC = () => {
  return (
    <div className="border-2 flex flex-col items-center">
      <img src={img} className="h-[300px] mb-[-30px]" />
      <p className="text-2xl">Name</p>
      <p className="text-2xl">Shampoo (50ml)</p>
      <p className="text-xl font-bold mt-6">20$</p>
      <button className="border-2 w-[90%] my-3 py-2">Add to Cart</button>
    </div>
  )
}

export default Card
