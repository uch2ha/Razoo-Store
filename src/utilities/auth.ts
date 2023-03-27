import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export const checkAuthStatus = (): { isAdmin: boolean; status: boolean } => {
  const user = useSelector((state: RootState) => state.user)
  if (user?.id === '') return { isAdmin: false, status: false }
  if (user?.isAdmin) return { isAdmin: true, status: true }
  return { isAdmin: false, status: true }
}
