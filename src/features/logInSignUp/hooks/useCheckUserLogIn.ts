import { IUser } from '../../../types/user.type'
import { getUsersFromLS } from '../../../utilities/localStorage'

export const useCheckUserLogIn = (email: string, pass: string): { err?: string; user?: IUser } => {
  const users = getUsersFromLS()

  const user = users.filter((user) => user.email === email)

  if (user.length === 0) return { err: 'Email or Password incorrect' }
  if (user[0].password !== pass) return { err: 'Email or Password incorrect' }

  delete user[0].password

  return { user: user[0] }
}
