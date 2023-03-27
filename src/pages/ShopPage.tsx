// packages
import React, { FC, useEffect, useState } from 'react'
// components
import NavBar from '../components/NavBar'
import ProductsGridComponent from '../features/productsGrid/components/ProductsGridComponent'
import ItemDetails from '../components/ItemDetails'
// files
import img from '../assets/homePageBg.jpg'

const ShopPage: FC = () => {
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
        className={`bg-gray-400 w-screen min-h-screen flex flex-col items-center justify-start ${
          itemIsVisible && 'blur-sm'
        }`}>
        <NavBar />
        <div className="h-full w-full flex justify-start items-center text-center flex-col">
          <img src={img} className="w-[82%] h-[200px] my-10" />
          <ProductsGridComponent setProductId={setProductId} />
        </div>
      </div>
      <ItemDetails handleClose={handleClose} productId={productId} isVisible={itemIsVisible} />
    </>
  )
}

export default ShopPage
