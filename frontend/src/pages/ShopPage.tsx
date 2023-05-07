// packages
import { FC } from 'react'
// components
import NavBar from '../components/NavBar'
import ProductsGridComponent from '../features/productsGrid/components/ProductsGridComponent'
import { withItemDetails } from '../HoC/withItemDetails'
// files
import bannerImg from '../assets/shopPageBanner.png'

interface IShopPageProps {
  setProductId?: (m: string | null) => void
}

const ShopPage: FC<IShopPageProps> = ({ setProductId }) => {
  return (
    <>
      <NavBar />
      <div className="h-full w-full flex justify-start items-center text-center flex-col">
        <img src={bannerImg} className="object-cover right-0 w-[82%] my-8 " />
        {setProductId && <ProductsGridComponent setProductId={setProductId} />}
      </div>
    </>
  )
}

export default withItemDetails(ShopPage)
