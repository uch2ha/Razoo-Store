import jwt_decode from 'jwt-decode'

import { IDecodedToken, IToken } from '../../../types/authentication.type'
import { IUser } from '../../../types'

export const handleTokenDecode = (token: IToken): IUser => {
  const decoded: IDecodedToken = jwt_decode(token.token)

  const user: IUser = {
    firstName: decoded.firstName,
    lastName: decoded.lastName,
    email: decoded.sub,
    role: decoded.role
  }

  return user
}
