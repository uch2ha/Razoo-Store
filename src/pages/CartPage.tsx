import { FC } from 'react'
import NavBar from '../components/NavBar'
import Cart from '../features/cart/components/Cart'
import { withItemDetails } from '../HoC/withItemDetails'

interface ICartPageProps {
  setProductId?: (m: string | null) => void
}

const CartPage: FC<ICartPageProps> = ({ setProductId }) => {
  return (
    <>
      <NavBar />
      <div className="h-full w-[82%] flex justify-start items-center text-center flex-col my-2">
        <h2 className="my-16 font-[700]">SHOPPING BAG</h2>
        {setProductId && <Cart setProductId={setProductId} />}
      </div>
    </>
  )
}

export default withItemDetails(CartPage)
