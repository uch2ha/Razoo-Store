// packages
import { FC, useEffect, useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// components
import { IGoogleUser } from '../types/googleUser.type'
import { userActions } from '../../../store/user/user.slice'
import { IUser } from '../../../types'
import { Google } from '../../../assets/svg/Google'
import { useOAuth2AuthenticateMutation } from '../../../store/api/oAuth2Google.api'
import { handleTokenDecode } from '../utilities/handleToken'
import { IToken } from '../../../types/authentication.type'
import { setTokenToLS } from '../../../utilities/localStorage'

interface IGoogleAuthProps {
  setError: (msg: string) => void
}

const GoogleAuthBtn: FC<IGoogleAuthProps> = ({ setError }) => {
  // auth google user
  const [trigger] = useOAuth2AuthenticateMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // get google user data
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => authHandler(codeResponse as IGoogleUser),
    onError: (error) => console.log('Login Failed:', error)
  })

  const authHandler = async (googleUser: IGoogleUser) => {
    const result = await trigger(googleUser)

    if (result.data) {
      const token: IToken = result.data
      const user: IUser = handleTokenDecode(token)

      setTokenToLS(token)
      dispatch(userActions.logIn(user))
      navigate('/shop')
    }
    if (result.error) setError(result.error.error)
  }

  return (
    <button onClick={() => login()} className="my-3 ">
      <Google className="text-3xl text-white hover:text-[#a0a772]" />
    </button>
  )
}

export default GoogleAuthBtn
