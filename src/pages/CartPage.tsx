import React, { FC, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Cart from '../features/cart/components/Cart'
import ItemDetails from '../components/ItemDetails'

const CartPage: FC = () => {
  const [itemIsVisible, setItemIsVisible] = useState(false)
  const [productId, setProductId] = useState<number | null>(null)

  const handleClose = () => {
    if (itemIsVisible) {
      setItemIsVisible(false)
      setProductId(null)
    }
  }

  // if itemId was changed open modal
  useEffect(() => {
    if (productId !== null) setItemIsVisible(true)
  }, [productId])

  // don't allow u to scroll when modal is opened
  useEffect(() => {
    // Set overflow to hidden on the body element when the modal is open
    if (itemIsVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [itemIsVisible])
  return (
    <>
      <div
        onClick={handleClose}
        className={`bg-gray-400 w-screen min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center  justify-start ${
          itemIsVisible && 'blur-sm'
        }`}>
        <NavBar />
        <div className="h-full w-full flex justify-start items-center text-center flex-col my-2">
          <h2 className="my-10">SHOPPING BAG</h2>
          <Cart setProductId={setProductId} />
        </div>
      </div>
      <ItemDetails handleClose={handleClose} productId={productId} isVisible={itemIsVisible} />
    </>
  )
}

export default CartPage
