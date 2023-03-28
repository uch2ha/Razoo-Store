import { FC } from 'react'
import NavBar from '../components/NavBar'
import Cart from '../features/cart/components/Cart'
import { withItemDetails } from '../HoC/withItemDetails'

interface ICartPageProps {
  setProductId: (m: number | null) => void
}

const CartPage: FC<ICartPageProps> = ({ setProductId }) => {
  return (
    <>
      <NavBar />
      <div className="h-full  w-[82%] flex justify-start items-center text-center flex-col my-2">
        <h2 className="my-10 font-[500]">SHOPPING BAG</h2>
        <Cart setProductId={setProductId} />
      </div>
    </>
  )
}

export default withItemDetails(CartPage)
