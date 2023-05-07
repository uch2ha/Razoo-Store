import { IUser } from '../../../types'
import { getUsersFromLS } from '../../../utilities/localStorage'

export const useCheckUserLogIn = (email: string, pass: string): { err?: string; user?: IUser } => {
  const users = getUsersFromLS()

  const user = users.find((user) => user.email === email)

  if (!user) return { err: 'Email or Password incorrect' }
  if (user.password !== pass) return { err: 'Email or Password incorrect' }

  delete user.password

  return { user: user }
}
