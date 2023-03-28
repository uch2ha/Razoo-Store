import React, { FC, useEffect, useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { useLazyGetUserQuery } from '../../../store/api/googleAuth/googleAuth.api'
import { IGoogleUser } from '../types/googleUser.type'
import { handleGoogleUserLogIn } from '../utilities/localStorage'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '../../../store/user/user.slice'
import { IUser } from '../../../types/user.type'

interface IGoogleAuthProps {
  setError: (msg: string) => void
}

const GoogleAuthBtn: FC<IGoogleAuthProps> = ({ setError }) => {
  const [googleUser, setGoogleUser] = useState<IGoogleUser | null>(null)

  // fetch google user from google.api
  const [trigger, result] = useLazyGetUserQuery()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // get google user data
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse as IGoogleUser),
    onError: (error) => console.log('Login Failed:', error)
  })

  // get google user Profile
  useEffect(() => {
    if (googleUser) {
      trigger(googleUser.access_token)
    }
  }, [googleUser])

  // save google user profile data to LS
  useEffect(() => {
    if (!result.isSuccess) return setError('Something went wrong')

    const user: IUser = {
      id: result.data.id,
      firstName: result.data.given_name,
      lastName: result.data.family_name,
      email: result.data.email,
      isGoogleLogin: true,
      isAdmin: false
    }

    const res = handleGoogleUserLogIn(user)
    if (res.success) {
      dispatch(userActions.logIn(user))
      navigate('/shop')
    } else {
      setError('Something went wrong')
    }
  }, [result])

  return (
    <button onClick={() => login()} className="bg-red-300 border py-2 px-4">
      Google 🚀
    </button>
  )
}

export default GoogleAuthBtn
