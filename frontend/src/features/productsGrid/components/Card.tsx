// packages
import { FC, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
// components
import { cartActions } from '../../../store/cart/cart.slice'
import { IProduct } from '../../../types'
import Image from '../../../Image'
import { useDeleteProductMutation } from '../../../store/api/products.api'

interface ICardProps {
  product: IProduct
  setProductId: (id: string) => void
  setIsEditProductId?: (n: string) => void
  setIsVisible?: (b: boolean) => void
}

const Card: FC<ICardProps> = ({ product, setProductId, setIsEditProductId, setIsVisible }) => {
  const dispatch = useDispatch()
  const [triggerDeleteProduct] = useDeleteProductMutation()

  const handleClick = (e: MouseEvent) => {
    if ((e.target as HTMLDivElement).id === 'add-to-cart')
      return dispatch(cartActions.addItem({ id: product.productId, price: product.price }))
    setProductId(product.productId)
  }

  const deleteProductId = () => {
    triggerDeleteProduct(product.productId)
    window.location.reload()
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
                setIsEditProductId(product.productId)
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
