// packages
import { ChangeEvent, FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
// components
import { userActions } from '../../../store/user/user.slice'
import { useAuthenticateMutation } from '../../../store/api/authentication.api'
import { IAuthenticate, IDecodedToken, IToken } from '../../../types/authentication.type'
import { setTokenToLS } from '../../../utilities/localStorage'
import { IUser } from '../../../types'

const LogInForm: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [trigger] = useAuthenticateMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogIn = async () => {
    const userLogInData: IAuthenticate = {
      email,
      password
    }

    const result = await trigger(userLogInData)

    if (result.data) {
      const token: IToken = result.data
      const decoded: IDecodedToken = jwt_decode(token.token)

      const user: IUser = {
        firstName: decoded.firstName,
        lastName: decoded.lastName,
        email: decoded.sub,
        role: decoded.role
      }

      setTokenToLS(token)
      dispatch(userActions.logIn(user))
      navigate('/shop')
    }
    if (result.error) setError(result.error.error)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'email') setEmail(e.target.value)
    if (e.target.id === 'password') setPassword(e.target.value)
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <h2 className="font-garamond text-[50px] mb-1">Login to Your Account</h2>
      <h4>using social networks</h4>
      {/* <GoogleAuthBtn setError={setError} /> */}
      <p>OR</p>
      {error && <h3 className="text-red-600 font-bold py-2 ">{error}</h3>}
      <input
        id="email"
        type="email"
        className="px-10 py-2 mb-4 mt-4 text-black"
        placeholder="Email"
        required
        onChange={handleInputChange}
      />
      <input
        id="password"
        type="password"
        className="px-10 py-2 mb-8 text-black"
        placeholder="Password"
        required
        onChange={handleInputChange}
      />
      <button className="border-[1px] px-20 py-3" onClick={handleLogIn}>
        Sing In
      </button>
    </div>
  )
}

export default LogInForm
