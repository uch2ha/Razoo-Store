import { IOrder } from '../types'
import { IUser } from '../types'
import { IToken } from '../types/authentication.type'

// token
export const setTokenToLS = (token: IToken): void => {
  localStorage.setItem('token', token.token)
}

export const deleteTokenFromLS = (): void => {
  localStorage.removeItem('token')
}

// export const initLocalStorage = (data: IDb) => {
//   //set all fixed data to LS, while first loading
//   localStorage.setItem('users', JSON.stringify(data.users))
//   // localStorage.setItem('products', JSON.stringify(data.products))
//   localStorage.setItem('orders', JSON.stringify(data.orders))
// }

// ORDERS --------------------------------
export const getOrdersByUserIdFromLS = (id: string): IOrder[] | [] => {
  const orders: IOrder[] = JSON.parse(localStorage.getItem('orders') ?? '[]')
  const userOrders = orders.filter((order) => order.userId === id)
  if (userOrders) return userOrders
  return []
}

// // USERS --------------------------------
// export const getUsersFromLS = (): IUser[] => {
//   const users = localStorage.getItem('users')
//   return JSON.parse(users ?? '[]')
// }

// export const getUserByIdFromLS = (id: string): IUser | null => {
//   const users: IUser[] = JSON.parse(localStorage.getItem('users') ?? '[]')
//   const user = users.find((user) => user.id === id)
//   if (user) return user
//   return null
// }

// export const setNewUserToLS = (user: IUser) => {
//   const users: IUser[] = JSON.parse(localStorage.getItem('users') ?? '[]')
//   users.unshift(user)
//   localStorage.setItem('users', JSON.stringify(users))
// }

// export const setNewUsersDataToLS = (user: IUser): boolean => {
//   const users: IUser[] = JSON.parse(localStorage.getItem('users') ?? '[]')
//   const newUsers = users.map((u) => {
//     if (u.id === user.id) return user
//     return u
//   })
//   localStorage.setItem('users', JSON.stringify(newUsers))
//   return true
// }

// export const removeUserByIdFromLS = (id: string) => {
//   const users: IUser[] = JSON.parse(localStorage.getItem('users') ?? '[]')
//   const newUser = users.filter((user) => user.id !== id)
//   localStorage.setItem('users', JSON.stringify(newUser))
// }

// GOOGLE USERS -------------------------------------------------------------

// export const handleGoogleUserLogIn = (user: IUser): { success: boolean } => {
//   const users: IUser[] = JSON.parse(localStorage.getItem('users') ?? '[]')
//   if (users.length > 0) {
//     const userExist = users.find((u) => u.id === user.id && u.email === user.email)
//     if (userExist) return { success: true }
//   }

//   return saveNewGoogleUserToLS(user, users)
// }

// export const saveNewGoogleUserToLS = (user: IUser, users: IUser[]) => {
//   users.push(user)
//   localStorage.setItem('users', JSON.stringify(users))
//   return { success: true }
// }
