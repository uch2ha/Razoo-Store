import { IDb } from '../store/api/DB/db.api'
import { IOrder } from '../types/order.type'
import { IUser } from '../types/user.type'

export const initLocalStorage = (data: IDb) => {
  //set all fixed data to LS, while first loading
  localStorage.setItem('users', JSON.stringify(data.users))
  // localStorage.setItem('products', JSON.stringify(data.products))
  localStorage.setItem('orders', JSON.stringify(data.orders))
}

// ORDERS --------------------------------
export const getOrdersByUserIdFromLS = (id: string): IOrder[] | [] => {
  const orders: IOrder[] = JSON.parse(localStorage.getItem('orders') ?? '[]')
  const userOrders = orders.filter((order) => order.userId === id)
  if (userOrders) return userOrders
  return []
}

// USERS --------------------------------

export const getUserByIdFromLS = (id: string): IUser | null => {
  const users: IUser[] = JSON.parse(localStorage.getItem('users') ?? '[]')
  const user = users.find((user) => user.id === id)
  if (user) return user
  return null
}

export const setNewUserToLS = (user: IUser) => {
  const users: IUser[] = JSON.parse(localStorage.getItem('users') ?? '[]')
  users.unshift(user)
  localStorage.setItem('users', JSON.stringify(users))
}

export const setNewUsersDataToLS = (user: IUser): boolean => {
  const users: IUser[] = JSON.parse(localStorage.getItem('users') ?? '[]')
  const newUsers = users.map((u) => {
    if (u.id === user.id) return user
    return u
  })
  localStorage.setItem('users', JSON.stringify(newUsers))
  return true
}

// LOGIN ------------------------------------------------------------------
export const getUsersFromLS = (): IUser[] => {
  const users = localStorage.getItem('users')
  return JSON.parse(users ?? '[]')
}

// SIGNUP ------------------------------------------------------------------
export const saveNewUserToLS = (user: IUser): { success: boolean; err?: string } => {
  const users: IUser[] = JSON.parse(localStorage.getItem('users') ?? '[]')
  const duplicateUser = users.find((u) => u.email === user.email)
  if (duplicateUser) return { success: false, err: 'User already exists, try to sign in' }
  users.push(user)
  localStorage.setItem('users', JSON.stringify(users))
  return { success: true }
}
// GOOGLE USERS -------------------------------------------------------------

export const handleGoogleUserLogIn = (user: IUser): { success: boolean } => {
  const users: IUser[] = JSON.parse(localStorage.getItem('users') ?? '[]')
  if (users.length > 0) {
    const userExist = users.find((u) => u.id === user.id && u.email === user.email)
    if (userExist) return { success: true }
  }

  return saveNewGoogleUserToLS(user, users)
}

export const saveNewGoogleUserToLS = (user: IUser, users: IUser[]) => {
  users.push(user)
  localStorage.setItem('users', JSON.stringify(users))
  return { success: true }
}
