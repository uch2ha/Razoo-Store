import React, { FC, useState } from 'react'
import Button from '../../../components/Button'

import img from '../../../assets/bg-test.webp'
import MyInfo from './MyInfo'
import MyOrders from './MyOrders'

const MyAccount: FC = () => {
  const [isMyInfo, setIsMyInfo] = useState(false)

  const handleSideClick = (label: string) => {
    if (label === 'MY INFO') return setIsMyInfo(true)
    return setIsMyInfo(false)
  }
  return (
    <div className="flex w-full h-full space-x-3">
      <div className="border-t-2 border-r-2 w-1/5 flex flex-col">
        <div className="flex flex-col min-h-[7rem]">
          <Button label="MY INFO" clickHandler={handleSideClick} styles="border-b-2 h-1/2" />
          <Button label="ORDERS" clickHandler={handleSideClick} styles="border-b-2 h-1/2" />
        </div>
        <img src={img} className="object-cover h-full" />
      </div>
      <div className="border-2 w-4/5">{isMyInfo ? <MyInfo /> : <MyOrders />}</div>
    </div>
  )
}

export default MyAccount
