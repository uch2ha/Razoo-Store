import { IUser } from '../types/user.type'

export const checkAuthStatus = (): { isAdmin: boolean; status: boolean } => {
  const user: IUser = JSON.parse(localStorage.getItem('user') ?? '{}')
  if (user?.id === undefined) return { isAdmin: false, status: false }
  if (user?.isAdmin) return { isAdmin: true, status: true }
  return { isAdmin: false, status: true }
}
