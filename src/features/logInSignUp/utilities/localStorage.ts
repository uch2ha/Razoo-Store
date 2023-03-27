import { IUser } from '../../../types/user.type'
import { IGoogleProfile } from '../types/googleProfile.type'

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
