import React, { FC, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/cart/cart.slice'
import { IProduct } from '../../../types/product.type'
import { productsActions } from '../../../store/products/products.slice'

interface ICardProps {
  product: IProduct
  setProductId: (id: string) => void
  setIsEditProductId?: (n: string) => void
  setIsVisible?: (b: boolean) => void
}

const Card: FC<ICardProps> = ({ product, setProductId, setIsEditProductId, setIsVisible }) => {
  const dispatch = useDispatch()

  const handleClick = (e: MouseEvent) => {
    if ((e.target as HTMLDivElement).id === 'add-to-cart')
      return dispatch(cartActions.addItem({ id: product.id, price: product.price }))
    setProductId(product.id)
  }

  const deleteProductId = () => {
    dispatch(productsActions.deleteProductById(product.id))
  }

  return (
    <div
      className="flex flex-col justify-between items-center border-2 rounded-md shadow-lg hover:scale-[1.015] btn"
      onClick={handleClick}>
      <div className="w-full flex flex-col items-center justify-end h-full">
        <img src={`./src/assets/productImg/${product.img}.png`} className="w-[40%] my-6" />
        <p className="text-2xl">{product.name}</p>
        <p className="text-2xl">
          {product.category} ({product.size})
        </p>
      </div>
      <div className="w-full">
        <p className="text-xl font-bold mt-6">{product.price}$</p>
        {setIsEditProductId && setIsVisible ? (
          <div className="flex px-4 space-x-4">
            <button
              id="add-to-cart"
              className="border-2 w-[90%] my-3 py-2 hover:bg-red-400"
              onClick={() => {
                setIsEditProductId(product.id)
                setIsVisible(true)
              }}>
              Edit
            </button>
            <button
              id="add-to-cart"
              className="border-2 w-[90%] my-3 py-2 hover:bg-red-400"
              onClick={deleteProductId}>
              Delete
            </button>
          </div>
        ) : (
          <button id="add-to-cart" className="border-2 w-[90%] my-3 py-2 hover:bg-red-400">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}

export default Card
