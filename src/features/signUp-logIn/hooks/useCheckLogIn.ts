import { getUsersFromLS } from '../../../functions/localStorage'
import { ICurrentUser } from '../../../models/currentUser'

export const useCheckLogIn = (
  email: string,
  pass: string
): { err?: string; currentUser?: ICurrentUser } => {
  const users = getUsersFromLS()

  const user = users.filter((user) => user.email === email)

  if (user.length === 0) return { err: 'Email or Password incorrect' }
  if (user[0].password !== pass) return { err: 'Email or Password incorrect' }

  const currentUser: ICurrentUser = user[0]

  delete currentUser.password

  return { currentUser: currentUser }
}
