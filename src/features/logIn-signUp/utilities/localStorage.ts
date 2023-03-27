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

export const handleGoogleUserLogIn = (
  profile: IGoogleProfile
): { success: boolean; err?: string } => {
  const googleUsers: IGoogleProfile[] = JSON.parse(localStorage.getItem('googleUsers') ?? '[]')
  if (googleUsers.length === 0) return saveNewGoogleUserToLS(profile, googleUsers)

  const userExist = googleUsers.find(
    (user) => user.id === profile.id && user.email === profile.email
  )
  if (userExist) return { success: true }

  return saveNewGoogleUserToLS(profile, googleUsers)
}

export const saveNewGoogleUserToLS = (profile: IGoogleProfile, googleUsers: IGoogleProfile[]) => {
  googleUsers.push(profile)
  localStorage.setItem('googleUsers', JSON.stringify(googleUsers))
  return { success: true }
}
