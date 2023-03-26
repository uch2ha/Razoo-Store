import React, { FC, useEffect, useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { useLazyGetUserQuery } from '../../../store/api/googleAuth/googleAuth.api'
import { IGoogleUser } from '../models/googleUser.type'
import { checkGoogleUserInLS, saveGoogleUserToLS } from '../services/localStorage'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '../../../store/user/user.slice'

interface IGoogleAuthProps {
  isLogin: boolean
  setError: (msg: string) => void
}

const GoogleAuthBtn: FC<IGoogleAuthProps> = ({ isLogin, setError }) => {
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
    if (!result.isSuccess) return
    if (isLogin) {
      // LOGIN functionality
      const res = checkGoogleUserInLS(result.data)
      if (res.success) {
        dispatch(userActions.setUser(result.data))
        navigate('/account')
        setError('')
      }
      if (res.err) setError(res.err)
    } else {
      // SIGN UP functionality
      const res = saveGoogleUserToLS(result.data)
      if (res.success) {
        dispatch(userActions.setUser(result.data))
        navigate('/account')
        setError('')
      }
      if (res.err) setError(res.err)
    }
  }, [result])

  return (
    <button onClick={() => login()} className="bg-red-300 border py-2 px-4">
      Google 🚀
    </button>
  )
}

export default GoogleAuthBtn
