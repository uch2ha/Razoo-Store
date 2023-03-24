import React, { FC, useEffect, useState } from 'react'
import { IProduct } from '../models'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface IItemDetailsProps {
  handleClose: () => void
  productId: number | null
}

const initState: IProduct = {
  id: 0,
  name: 'Loading...',
  description: 'Loading...',
  category: 'shampoo',
  size: '50ml',
  price: 100
}

const ItemDetails: FC<IItemDetailsProps> = ({ handleClose, productId }) => {
  const [product, setProduct] = useState<IProduct>(initState)

  const products = useSelector((state: RootState) => state.products)

  useEffect(() => {
    if (productId !== null) getProductById(productId)
  }, [])

  const getProductById = (id: number) => {
    const product = products.filter((product) => product.id === id)

    setProduct(product[0])
  }

  return (
    <div className="fixed z-50 top-1/2 left-1/2 w-[70%] h-[70%] flex transform -translate-x-1/2 -translate-y-1/2 blur-none">
      <div className="w-[53%] bg-red-300">123</div>
      <div className="w-[47%] bg-red-700 flex justify-center items-center">
        <div className="h-[70%] w-[80%] mx-auto">
          <div className="border-b-2 h-1/3 flex flex-col justify-between px-[10%]">
            <div className="text-3xl pt-[5%]">
              <p>{product.name}</p>
              <p>{product.category}</p>
            </div>
            <p className="text-2xl pb-4">{product.price}$</p>
          </div>
          <div className="px-[10%] h-2/3 flex flex-col justify-between items-start">
            <div className="py-8">
              <p className="pb-4">{product.description}</p>
              <p>{product.size}</p>
            </div>

            <button className="border-2 px-20 py-4">Click</button>
          </div>
        </div>
        <div className="fixed top-5 right-7">
          <button onClick={handleClose}>x</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails
