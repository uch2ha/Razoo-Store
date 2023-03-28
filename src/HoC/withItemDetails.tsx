import { useEffect, useState } from 'react'
import ItemDetails from '../components/ItemDetails'

export const withItemDetails = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  // define the props for the HoC component
  type Props = Omit<P, keyof object>

  // return a new component that renders the wrapped component with additional props and components
  const WithItemDetails: React.FC<Props> = (props: Props) => {
    const [productId, setProductId] = useState<number | null>(null)
    const [itemIsVisible, setItemIsVisible] = useState(false)

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
