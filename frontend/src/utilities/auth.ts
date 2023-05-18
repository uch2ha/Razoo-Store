// packages
import { useSelector } from 'react-redux'
// components
import { RootState } from '../store/store'

export const checkAuthStatus = (): { role?: 'ADMIN' | 'USER'; isLogIn: boolean } => {
  const user = useSelector((state: RootState) => state.user)
  if (user?.id === '') return { isLogIn: false }
  return { role: user.role, isLogIn: true }
}
