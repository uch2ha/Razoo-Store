export type IToken = {
  token: string
}

export type IDecodedToken = {
  sub: string
  firstName: string
  lastName: string
  userId: string
  role: 'ADMIN' | 'USER'
  exp: number
  iat: number
}

export type IRegister = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type IAuthenticate = {
  email: string
  password: string
}
