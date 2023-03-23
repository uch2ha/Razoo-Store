import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar: FC = () => {
  const [activePage, setActivePage] = useState<string>('/')

  useEffect(() => {
    setActivePage(window.location.pathname)
  }, [])

  return (
    <div className="w-[82%] flex justify-between items-center mx-auto h-[80px] border-b-[3px]">
      <div className="w-1/3">LOGO</div>
      <div className="w-1/3">
        <ul className="flex justify-evenly items-center ">
          <li className={`${activePage === '/' ? 'active-link' : ''} btn`}>
            <Link to="/">HOME</Link>
          </li>
          <li className={`${activePage === '/shop' ? 'active-link' : ''} btn`}>
            <Link to="/shop">SHOP</Link>
          </li>
          <li className={`${activePage === '/about' ? 'active-link' : ''} btn`}>
            <Link to="/about">ABOUT US</Link>
          </li>
        </ul>
      </div>
      <div className="w-1/3">
        <ul className="flex justify-end items-center space-x-5">
          <li className="btn">MY ACCOUNT</li>
          <li className="btn">LOGOUT</li>
          <li className="btn">CART</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
