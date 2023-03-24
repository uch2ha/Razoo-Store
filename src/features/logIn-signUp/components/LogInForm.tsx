import React, { ChangeEvent, FC, useState } from 'react'
import { useCheckLogIn } from '../hooks/useCheckLogIn'
import { useDispatch } from 'react-redux'
import { currentUserActions } from '../../../store/currentUser/currentUser.slice'
import { useNavigate } from 'react-router-dom'

const LogInForm: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogIn = () => {
    const result = useCheckLogIn(email, password)
    if (result.err) return setError(result.err)
    if (result.currentUser) {
      // set current user to currentUser store
      dispatch(currentUserActions.setCurrentUser(result.currentUser))
      navigate('/account')
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'email') setEmail(e.target.value)
    if (e.target.type === 'password') setPassword(e.target.value)
  }

  return (
    <div className="w-full h-full bg-white flex flex-col justify-center items-center">
      <h2>Login to Your Account</h2>
      <h4>Login using social networks!</h4>
      <span>Google</span>
      <p>OR</p>
      {error && <h3 className="text-red-600 text-2xl font-bold py-4">{error}</h3>}
      <input
        type="email"
        className="border-4"
        placeholder="Email"
        required
        onChange={handleInputChange}
      />
      <input
        type="password"
        className="border-4"
        placeholder="Password"
        required
        onChange={handleInputChange}
      />
      <button className="border-2 px-10 py-4" onClick={handleLogIn}>
        Sing In
      </button>
    </div>
  )
}

export default LogInForm
