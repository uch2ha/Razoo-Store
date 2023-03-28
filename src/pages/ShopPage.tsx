// packages
import { FC } from 'react'
// components
import NavBar from '../components/NavBar'
import ProductsGridComponent from '../features/productsGrid/components/ProductsGridComponent'
// files
import img from '../assets/homePageBg.jpg'
import { withItemDetails } from '../HoC/withItemDetails'

interface IShopPageProps {
  setProductId: (m: number | null) => void
}

const ShopPage: FC<IShopPageProps> = ({ setProductId }) => {
  return (
    <>
      <NavBar />
      <div className="h-full w-full flex justify-start items-center text-center flex-col">
        <img src={img} className="w-[82%] h-[200px] my-10" />
        <ProductsGridComponent setProductId={setProductId} />
      </div>
    </>
  )
}

export default withItemDetails(ShopPage)
