// packages
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// components
import { IProduct } from '../types'
import { RootState } from '../store/store'
import { cartActions } from '../store/cart/cart.slice'
import { CloseBtn } from '../assets/svg/CloseBtn'
import Button from './Button'
// files
import logo from '../assets/logo-column.png'
import { popUpProductAddedToCart } from './notifications'
import { useGetFixedImageByProductId } from '../hooks/useGetProductImg'

interface IItemDetailsProps {
  handleClose: () => void
  productId: string | null
  isVisible: boolean
}

const initState: IProduct = {
  productId: '',
  imgBlob: '',
  name: 'Loading...',
  description: 'Loading...',
  instruction: 'Loading...',
  category: 'SHAMPOO',
  size: '50ml',
  price: 100
}

const ItemDetails: FC<IItemDetailsProps> = ({ handleClose, productId, isVisible }) => {
  const [product, setProduct] = useState<IProduct>(initState)

  const dispatch = useDispatch()

  // get product list from store
  const products = useSelector((state: RootState) => state.products)

  useEffect(() => {
    if (productId !== null) getProductById(productId)
  }, [productId])

  const getProductById = (id: string) => {
    const product = products.find((product) => product.productId === id)
    if (product) setProduct(product)
  }

  const handleAddItem = () => {
    const { productId: id, price } = product
    popUpProductAddedToCart(product.name)
    dispatch(cartActions.addItem({ id, price }))
  }

  return (
    <div
      className={`fixed left-1/2 w-[85%] max-h-[80%] overflow-hidden flex transform -translate-x-1/2 -translate-y-1/2 blur-none transition-all duration-700 ${
        isVisible ? 'z-50 top-1/2 ' : 'top-[-100%]'
      }`}>
      <div className="w-[52%] bg-[#e2ded7] -tl-md -bl-md flex justify-center items-center">
        {productId && (
          <img
            src={useGetFixedImageByProductId(product.productId)}
            alt="My Image"
            className="max-h-[70%]"
          />
        )}
        <img src={logo} className="absolute top-7 left-7 w-[90px]" />
      </div>
      <div className="w-[48%] bg-[#f2f2f0] flex justify-center items-center -tr-md -br-md overflow-x-scroll">
        <div className="h-[80%] w-[75%] mx-auto">
          <div className="border-b-[2px]  h-1/3 flex flex-col justify-end px-[8%]">
            <div className="text-3xl pb-[5%] uppercase font-[500]">
              <p>{product.name}</p>
              <p>{product.category}</p>
            </div>
            <p className="text-2xl pb-4">
              {product.price}$ &nbsp;&nbsp;|&nbsp;&nbsp; <span>{product.size}</span>
            </p>
          </div>
          <div className="px-[8%] pb-10 flex flex-col justify-start items-start ">
            <div className="py-8 xl:text-lg lg:text-base ">
              <p>{product.description}</p>
              <p className="pb-[5%]">{product.instruction}</p>
            </div>
            <Button
              label="ADD TO CART"
              clickHandler={handleAddItem}
              styles="border-[1px] px-20 py-4 bg-[#301001] text-white"
            />
          </div>
        </div>
        <div className="fixed top-5 right-5">
          <button onClick={handleClose}>
            <CloseBtn className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails
