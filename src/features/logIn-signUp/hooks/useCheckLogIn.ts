import { IUser } from '../../../models'
import { getUsersFromLS } from '../../../services/localStorage'

export const useCheckLogIn = (email: string, pass: string): { err?: string; user?: IUser } => {
  const users = getUsersFromLS()

  const user = users.filter((user) => user.email === email)

  if (user.length === 0) return { err: 'Email or Password incorrect' }
  if (user[0].password !== pass) return { err: 'Email or Password incorrect' }

  delete user[0].password

  return { user: user[0] }
}
