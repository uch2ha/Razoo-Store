// packages
import { ChangeEvent, FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// components
// import GoogleAuthBtn from './GoogleAuthBtn'
import { userActions } from '../../../store/user/user.slice'
import { IRegister, IToken } from '../../../types/authentication.type'
import { useRegisterMutation } from '../../../store/api/authentication.api'
import { setTokenToLS } from '../../../utilities/localStorage'
import { IUser } from '../../../types'
import { handleTokenDecode } from '../utilities/handleToken'
import GoogleAuthBtn from './GoogleAuthBtn'

const SignUpForm: FC = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [rePassword, setRePassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // register new user
  const [trigger] = useRegisterMutation()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'firstName') setFirstName(e.target.value)
    if (e.target.id === 'lastName') setLastName(e.target.value)
    if (e.target.id === 'email') setEmail(e.target.value)
    if (e.target.id === 'password') setPassword(e.target.value)
    if (e.target.id === 'rePassword') setRePassword(e.target.value)
  }

  const handleSignUp = async () => {
    if (!validation()) {
      return
    }

    const user: IRegister = {
      firstName: capitalizeFirstLetter(firstName),
      lastName: capitalizeFirstLetter(lastName),
      email: email.toLocaleLowerCase(),
      password: password
    }

    const result = await trigger(user)

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

  const validation = () => {
    if (!firstName || !lastName || !email || !password || !rePassword)
      return setError('Please enter all fields')
    if (firstName.length < 3) return setError('First Name must be at least 3 characters')
    if (lastName.length < 3) return setError('Last Name must be at least 3 characters')
    if (password.length < 6) return setError('Passwords must be at least 6 characters')
    if (password !== rePassword) return setError("Passwords don't match")
    return true
  }

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <h2 className="font-garamond text-[50px] mb-1">Create Account</h2>
      <h4>using social networks</h4>
      <GoogleAuthBtn setError={setError} />
      <p>OR</p>
      {error && <h3 className="text-red-600 font-bold py-4">{error}</h3>}
      <input
        id="firstName"
        type="text"
        className="px-10 py-2 mb-[10px] mt-2 text-black"
        placeholder="First Name"
        required
        onChange={handleInputChange}
      />
      <input
        id="lastName"
        type="text"
        className="px-10 py-2 mb-[10px] text-black"
        placeholder="Last Name"
        required
        onChange={handleInputChange}
      />
      <input
        id="email"
        type="email"
        className="px-10 py-2 mb-[10px] text-black"
        placeholder="Email"
        required
        onChange={handleInputChange}
      />
      <input
        id="password"
        type="password"
        className="px-10 py-2 mb-[10px] text-black"
        placeholder="Password"
        required
        onChange={handleInputChange}
      />
      <input
        id="rePassword"
        type="password"
        className="px-10 py-2 mb-4 text-black"
        placeholder="Repeat Password "
        required
        onChange={handleInputChange}
      />
      <button className="border-[1px] px-20 py-3" onClick={handleSignUp}>
        Sing In
      </button>
    </div>
  )
}

export default SignUpForm
