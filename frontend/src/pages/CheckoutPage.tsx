// packages
import { FC } from 'react'
// components
import NavBar from '../components/NavBar'
import Checkout from '../features/checkuot/components/Checkout'

// interface ICartPageProps {
// }

const CheckoutPage: FC = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-start">
      <NavBar />
      <div className="w-[82%]">
        <h2 className="my-16 font-[700] text-center">CHECKOUT</h2>
        <Checkout />
      </div>
    </div>
  )
}

export default CheckoutPage
