import React, { FC, useState } from 'react'
import { withItemDetails } from '../../../../HoC/withItemDetails'
import ProductsGridComponent from '../../../productsGrid/components/ProductsGridComponent'
import AddEditComponent from '../AddEditComponent'

interface IAdminProductsProps {
  setProductId?: (m: number | null) => void
}

const AdminProducts: FC<IAdminProductsProps> = ({ setProductId }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isEditProductId, setIsEditProductId] = useState<number | null>(null)

  return (
    <div className="self-start text-center w-full mt-20">
      {setProductId && (
        <ProductsGridComponent
          setProductId={setProductId}
          isAdmin={true}
          setIsVisible={setIsVisible}
          setIsEditProductId={setIsEditProductId}
        />
      )}
      {isVisible && (
        <AddEditComponent
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          isProduct={true}
          isEditProductId={isEditProductId}
          setIsEditProductId={setIsEditProductId}
        />
      )}
    </div>
  )
}

export default withItemDetails(AdminProducts)
