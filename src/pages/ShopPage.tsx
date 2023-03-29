// packages
import { FC } from 'react'
// components
import NavBar from '../components/NavBar'
import ProductsGridComponent from '../features/productsGrid/components/ProductsGridComponent'
// files
import { withItemDetails } from '../HoC/withItemDetails'

interface IShopPageProps {
  setProductId?: (m: number | null) => void
}

const ShopPage: FC<IShopPageProps> = ({ setProductId }) => {
  return (
    <>
      <NavBar />
      <div className="h-full w-full flex justify-start items-center text-center flex-col">
        <img
          src={`./src/assets/shopPageBanner.png`}
          className="object-cover right-0 w-[82%] my-8"
        />
        {setProductId && <ProductsGridComponent setProductId={setProductId} />}
      </div>
    </>
  )
}

export default withItemDetails(ShopPage)
