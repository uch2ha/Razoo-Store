import React, { FC } from 'react'
import { withItemDetails } from '../../../HoC/withItemDetails'
import ProductsGridComponent from '../../productsGrid/components/ProductsGridComponent'

interface IAdminProductsProps {
  setProductId?: (m: number | null) => void
}

const AdminProducts: FC<IAdminProductsProps> = ({ setProductId }) => {
  return (
    <div className="self-start text-center w-full mt-20">
      {setProductId && <ProductsGridComponent setProductId={setProductId} isAdmin={true} />}
    </div>
  )
}

export default withItemDetails(AdminProducts)
