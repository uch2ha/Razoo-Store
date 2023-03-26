import { IUser } from '../../../models'
import { IGoogleProfile } from '../models/googleProfile.type'

// LOGIN ------------------------------------------------------------------
export const getUsersFromLS = (): IUser[] => {
  console.log('get users')

  const users = localStorage.getItem('users')
  return JSON.parse(users ?? '[]')
}

export const checkGoogleUserInLS = (
  profile: IGoogleProfile
): { success: boolean; err?: string } => {
  const googleUsers: IGoogleProfile[] = JSON.parse(localStorage.getItem('googleUsers') ?? '[]')
  const isExist = googleUsers.find((user) => user.id === profile.id)
  if (!isExist) return { success: false, err: 'User not found, try SIGN UP' }
  return { success: true }
}

export const setCurrentUserToLS = (user: IUser): void => {
  const res = JSON.parse(localStorage.getItem('user') ?? '{}')
  // if user is already set in LS, then nothing do

  if (res?.id) return
  localStorage.setItem('user', JSON.stringify(user))
}

// LOGOUT -----------------------------------------------------------------
export const removeCurrentUserFromLS = (): void => {
  localStorage.removeItem('user')
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

export const saveNewGoogleUserToLS = (
  profile: IGoogleProfile
): { success: boolean; err?: string } => {
  const googleUsers: IGoogleProfile[] = JSON.parse(localStorage.getItem('googleUsers') ?? '[]')
  const duplicateUser = googleUsers.find((user) => user.id === profile.id)
  if (duplicateUser) return { success: false, err: 'User already exists, try to sign in' }
  googleUsers.push(profile)
  localStorage.setItem('googleUsers', JSON.stringify(googleUsers))
  return { success: true }
}
