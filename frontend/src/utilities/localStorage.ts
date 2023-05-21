import { IToken } from '../types/authentication.type'

// token
export const setTokenToLS = (token: IToken): void => {
  localStorage.setItem('token', token.token)
}

export const deleteTokenFromLS = (): void => {
  localStorage.removeItem('token')
}

export const getTokenFromLS = (): string => {
  return localStorage.getItem('token') ?? ''
}
