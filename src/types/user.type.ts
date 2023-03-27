export type IUser = {
  id: string
  firstName: string
  lastName: string
  email: string
  isAdmin: boolean
  isGoogleLogin: boolean | null
  password?: string
}
