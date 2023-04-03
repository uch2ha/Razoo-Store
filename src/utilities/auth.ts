// packages
import { useSelector } from 'react-redux'
// components
import { RootState } from '../store/store'

export const checkAuthStatus = (): { isAdmin: boolean; isLogIn: boolean } => {
  const user = useSelector((state: RootState) => state.user)
  if (user?.id === '') return { isAdmin: false, isLogIn: false }
  if (user?.isAdmin) return { isAdmin: true, isLogIn: true }
  return { isAdmin: false, isLogIn: true }
}
