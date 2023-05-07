// packages
import { useState } from 'react'
// components
import ItemDetails from '../components/ItemDetails'

export const withItemDetails = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  type Props = Omit<P, keyof object>

  const WithItemDetails: React.FC<Props> = (props: Props) => {
    const [productId, setProductId] = useState<string | null>(null)
    const [prevProduct, setPrevProduct] = useState<string | null>(null)
    const [itemIsVisible, setItemIsVisible] = useState(false)

    // if itemId was changed open modal
    if (productId !== null && prevProduct !== productId) {
      setItemIsVisible(true)
      setPrevProduct(productId)
    }

    // don't allow u to scroll when modal is opened
    if (itemIsVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    const handleClose = () => {
      if (itemIsVisible) {
        setItemIsVisible(false)
        setProductId(null)
        setPrevProduct(null)
      }
    }

    return (
      <>
        <div
          onClick={handleClose}
          className={` w-screen min-h-screen flex flex-col items-center  justify-start ${
            itemIsVisible && 'blur-sm'
          }`}>
          <WrappedComponent {...(props as P)} setProductId={setProductId} />
        </div>
        <ItemDetails handleClose={handleClose} productId={productId} isVisible={itemIsVisible} />
      </>
    )
  }

  WithItemDetails.displayName = `withItemDetails(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`

  return WithItemDetails
}
