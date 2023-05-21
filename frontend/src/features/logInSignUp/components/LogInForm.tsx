// packages
import { ChangeEvent, FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// components
import { userActions } from '../../../store/user/user.slice'
import { useAuthenticateMutation } from '../../../store/api/authentication.api'
import { IAuthenticate, IToken } from '../../../types/authentication.type'
import { setTokenToLS } from '../../../utilities/localStorage'
import { IUser } from '../../../types'
import GoogleAuthBtn from './GoogleAuthBtn'
import { handleTokenDecode } from '../utilities/handleToken'

const LogInForm: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [trigger] = useAuthenticateMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogIn = async () => {
    if (!validation()) {
      return
    }

    const userLogInData: IAuthenticate = {
      email,
      password
    }

    const result = await trigger(userLogInData)

    if ('data' in result) {
      const token: IToken = result.data
      const user: IUser = handleTokenDecode(token)

      setTokenToLS(token)
      dispatch(userActions.logIn(user))
      navigate('/shop')
    }
    // not best "if statement"
    // I know
    if ('error' in result) {
      if ('error' in result.error) {
        setError(result.error.error)
      }
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'email') setEmail(e.target.value)
    if (e.target.id === 'password') setPassword(e.target.value)
  }

  const validation = () => {
    if (!email || !password) return setError('Please enter all fields')
    if (password.length < 6) return setError('Passwords must be at least 6 characters')
    return true
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <h2 className="font-garamond text-[50px] mb-1">Login to Your Account</h2>
      <h4>using social networks</h4>
      <GoogleAuthBtn setError={setError} />
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
