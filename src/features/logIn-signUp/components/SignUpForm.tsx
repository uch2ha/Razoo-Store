import { ChangeEvent, FC, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { saveUserToLS } from '../services/localStorage'
import { useNavigate } from 'react-router-dom'
import GoogleAuthBtn from './GoogleAuthBtn'
import { useDispatch } from 'react-redux'
import { userActions } from '../../../store/user/user.slice'

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

    const user = {
      id: uuidv4(),
      firstName: name,
      lastName: lastName,
      email: email,
      password: password,
      isAdmin: false
    }

    const res = saveUserToLS(user)

    if (res.success) {
      dispatch(userActions.setUser(user))
      navigate('/account')
      setError('')
    }
    if (res.err) setError(res.err)
  }

  return (
    <div className="w-full h-full bg-white flex flex-col justify-center items-center rounded-md">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.</p>
      <GoogleAuthBtn isLogin={false} setError={setError} />
      {error && <p>{error}</p>}
      <br />
      <input
        id="name"
        type="text"
        className="border-4"
        placeholder="Name"
        required
        onChange={handleInputChange}
      />
      <input
        id="last-name"
        type="text"
        className="border-4"
        placeholder="Last Name"
        required
        onChange={handleInputChange}
      />
      <input
        id="email"
        type="email"
        className="border-4"
        placeholder="Email"
        required
        onChange={handleInputChange}
      />
      <input
        id="password"
        type="password"
        className="border-4"
        placeholder="Password"
        required
        onChange={handleInputChange}
      />
      <input
        id="re-password"
        type="password"
        className="border-4"
        placeholder="Repeat Password"
        required
        onChange={handleInputChange}
      />
      <button className="border-2 px-10 py-4" onClick={handleSignUp}>
        Sing In
      </button>
    </div>
  )
}

export default SignUpForm
