// packages
import { FC, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
// components
import { cartActions } from '../../../store/cart/cart.slice'
import { IProduct } from '../../../types'
import { productsActions } from '../../../store/products/products.slice'
import Image from '../../../Image'

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
      className="flex flex-col justify-between items-center border-[1px] hover:scale-[1.015] btn"
      onClick={handleClick}>
      <div className="w-full flex flex-col items-center justify-center h-full">
        <Image src={product.img} alt="My Image" className="my-6 w-[50%]" />
        <p className="text-2xl uppercase">{product.name}</p>
        <p className="text-2xl uppercase">
          {product.category} ({product.size})
        </p>
      </div>
      <div className="w-full mb-4">
        <p className="text-xl font-bold mt-8 mb-2">{product.price}$</p>
        {setIsEditProductId && setIsVisible ? (
          <div className="flex px-4 space-x-4">
            <button
              id="add-to-cart"
              className="border-[1px] w-[90%] my-3 py-2 hover:bg-red-400 bg-[#898e68]/50"
              onClick={() => {
                setIsEditProductId(product.id)
                setIsVisible(true)
              }}>
              Edit
            </button>
            <button
              id="add-to-cart"
              className="border-[1px] w-[90%] my-3 py-2 hover:bg-red-400 bg-[#898e68]"
              onClick={deleteProductId}>
              Delete
            </button>
          </div>
        ) : (
          <button
            id="add-to-cart"
            className="border-[1px] w-[90%] my-3 py-2 hover:bg-[#898e68]/50 font-[700] uppercase">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}

export default Card
