import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { googleLogout } from '@react-oauth/google'
import { RootState } from '../store/store'
import { userActions } from '../store/user/user.slice'
import { cartActions } from '../store/cart/cart.slice'

interface INavBarProps {
  isWhite?: boolean
}

const NavBar: FC<INavBarProps> = ({ isWhite = false }) => {
  const [activePage, setActivePage] = useState<string>('/')

  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  const { id, isAdmin } = user

  const handleLogOut = () => {
    dispatch(userActions.logOut())
    dispatch(cartActions.clearCart())
    googleLogout()
  }

  useEffect(() => {
    setActivePage(window.location.pathname)
  }, [])

  return (
    <div className="w-[82%] flex justify-between items-center mx-auto min-h-[103px] border-b-[1.7px] text-xl font-[500]">
      <div className="w-1/3">
        {isWhite ? (
          <img src="./src/assets/logo-row-white.png" className="w-[30%]" />
        ) : (
          <img src="./src/assets/logo-row.png" className="w-[30%]" />
        )}
      </div>
      <div className="w-1/3">
        <ul className="flex justify-evenly items-center ">
          <li className={`${activePage === '/' ? 'active-link' : ''} btn`}>
            <Link to="/">HOME</Link>
          </li>
          <li className={`${activePage === '/shop' ? 'active-link' : ''} btn`}>
            <Link to="/shop">SHOP</Link>
          </li>
          <li className={`${activePage === '/about' ? 'active-link' : ''} btn`}>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </div>
      <div className="w-1/3">
        <ul className="flex justify-end items-center space-x-8">
          {id &&
            (isAdmin ? (
              <>
                <li className={`${activePage === '/admin' ? 'active-link' : ''} btn`}>
                  <Link to="/admin">ADMIN</Link>
                </li>
                <li className={`${activePage === '/account' ? 'active-link' : ''} btn`}>
                  <Link to="/account">MY ACCOUNT</Link>
                </li>
              </>
            ) : (
              <li className={`${activePage === '/account' ? 'active-link' : ''} btn`}>
                <Link to="/account">MY ACCOUNT</Link>
              </li>
            ))}
          <li className={`${activePage === '/cart' ? 'active-link' : ''} btn`}>
            <Link to="/cart">CART</Link>
          </li>
          {id ? (
            <li className={`btn`}>
              <button onClick={handleLogOut}>LOGOUT</button>
            </li>
          ) : (
            <li className={`${activePage === '/login' ? 'active-link' : ''} btn`}>
              <Link to="/login">LOGIN</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default NavBar
