import React, { FC, useState } from 'react'
import NavBar from '../components/NavBar'
import Button from '../components/Button'
import AdminProducts from '../features/admin/components/products/AdminProducts'
import AdminUsers from '../features/admin/components/users/AdminUsers'
import AdminOrders from '../features/admin/components/orders/AdminOrders'

const AdminPage: FC = () => {
  const [visible, setVisible] = useState<'PRODUCTS' | 'USERS' | 'ORDERS'>('USERS')

  const handleSwitch = (label: string) => {
    if (['PRODUCTS', 'USERS', 'ORDERS'].includes(label))
      setVisible(label as 'PRODUCTS' | 'USERS' | 'ORDERS')
  }
  return (
    <div className="bg-gray-400 w-screen min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center  justify-start">
      <NavBar />
      <div className="h-full w-full flex flex-col">
        <div className="flex justify-evenly items-center self-center w-[50%] py-5">
          <Button label="PRODUCTS" clickHandler={handleSwitch} />
          <Button label="USERS" clickHandler={handleSwitch} />
          <Button label="ORDERS" clickHandler={handleSwitch} />
        </div>
        {visible === 'PRODUCTS' && <AdminProducts />}
        {visible === 'USERS' && <AdminUsers />}
        {visible === 'ORDERS' && <AdminOrders />}
      </div>
    </div>
  )
}

export default AdminPage
