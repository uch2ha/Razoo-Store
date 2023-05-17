// packages
import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
// components
import { withItemDetails } from '../../../../HoC/withItemDetails'
import ProductsGridComponent from '../../../productsGrid/components/ProductsGridComponent'
import { RootState } from '../../../../store/store'
import { IProduct } from '../../../../types'
import AddEditComponent from '../AddEditComponent'

const initProduct: IProduct = {
  productId: '',
  img: 'shampoo',
  name: '',
  description: '',
  instruction: '',
  category: 'shampoo',
  size: '50ml',
  price: 0
}

interface IAdminProductsProps {
  setProductId?: (m: string | null) => void
}

const AdminProducts: FC<IAdminProductsProps> = ({ setProductId }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isEditProductId, setIsEditProductId] = useState<string | null>(null)

  const products = useSelector((state: RootState) => state.products)
  const getProductById = (id: string | null) => {
    if (id === null) return
    return products.find((product) => product.productId === id)
  }
  // if isEditProductId is equal to number then fetch product by id
  // and set this product to useState
  const productById = getProductById(isEditProductId !== null ? isEditProductId : null)
  // if not use initProduct instead
  const product = isEditProductId !== null && productById ? productById : initProduct

  const handleClose = () => {
    setIsVisible(false)
    setIsEditProductId(null)
  }

  return (
    <div className="self-start text-center w-full mt-10 ">
      {setProductId && (
        <ProductsGridComponent
          setProductId={setProductId}
          setIsVisible={setIsVisible}
          setIsEditProductId={setIsEditProductId}
        />
      )}
      {isVisible && (
        <AddEditComponent
          isVisible={isVisible}
          isProduct={true}
          propsItem={product}
          handleClose={handleClose}
        />
      )}
    </div>
  )
}

export default withItemDetails(AdminProducts)
