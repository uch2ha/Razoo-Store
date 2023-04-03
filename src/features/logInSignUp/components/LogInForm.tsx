// packages
import { ChangeEvent, FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// components
import { useCheckUserLogIn } from '../hooks/useCheckUserLogIn'
import { userActions } from '../../../store/user/user.slice'
import GoogleAuthBtn from './GoogleAuthBtn'

const LogInForm: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogIn = () => {
    const result = useCheckUserLogIn(email.toLowerCase(), password)
    if (result.err) return setError(result.err)
    if (result.user) {
      // set current user to store
      dispatch(userActions.logIn(result.user))
      navigate('/shop')
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'email') setEmail(e.target.value)
    if (e.target.id === 'password') setPassword(e.target.value)
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
