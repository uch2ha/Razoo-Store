// packages
import { ChangeEvent, FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// components
import GoogleAuthBtn from './GoogleAuthBtn'
import { userActions } from '../../../store/user/user.slice'
import { IUser } from '../../../types'
import { saveNewUserToLS } from '../../../utilities/localStorage'

const SignUpForm: FC = () => {
  const [name, setName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [rePassword, setRePassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'name') setName(e.target.value)
    if (e.target.id === 'last-name') setLastName(e.target.value)
    if (e.target.id === 'email') setEmail(e.target.value)
    if (e.target.id === 'password') setPassword(e.target.value)
    if (e.target.id === 're-password') setRePassword(e.target.value)
  }

  const handleSignUp = () => {
    if (!name || !lastName || !email || !password || !rePassword)
      return setError('Please enter all fields')
    if (password.length < 6) return setError('Passwords must be at least 6 characters')
    if (password !== rePassword) return setError("Passwords don't match")

    const user: IUser = {
      id: uuidv4(),
      firstName: name.toLocaleLowerCase(),
      lastName: lastName.toLocaleLowerCase(),
      email: email.toLocaleLowerCase(),
      password: password,
      isGoogleLogin: false,
      role: 'USER'
    }

    const res = saveNewUserToLS(user)

    if (res.success) {
      dispatch(userActions.logIn(user))
      navigate('/shop')
    }
    if (res.err) setError(res.err)
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <h2 className="font-garamond text-[50px] mb-1">Create Account</h2>
      <h4>using social networks</h4>
      <GoogleAuthBtn setError={setError} />
      <p>OR</p>
      {error && <h3 className="text-red-600 font-bold py-4">{error}</h3>}
      <input
        id="name"
        type="text"
        className="px-10 py-2 mb-[10px] mt-2 text-black"
        placeholder="Name"
        required
        onChange={handleInputChange}
      />
      <input
        id="last-name"
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
        id="re-password"
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
