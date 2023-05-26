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
import { Id, toast } from 'react-toastify'

interface IGoogleAuthProps {
  setError: (msg: string) => void
}

const GoogleAuthBtn: FC<IGoogleAuthProps> = ({ setError }) => {
  const [loadingId, setLoadingId] = useState<Id | null>(null)

  // auth google user
  const [trigger, { isLoading, isError }] = useOAuth2AuthenticateMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading) {
      setLoadingId(
        toast.loading(`Fetching...`, {
          position: 'bottom-left',
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'light'
        })
      )
    }

    if (!isError && !isLoading && loadingId !== null) {
      toast.update(loadingId, {
        render: 'LogIn succeeded',
        type: toast.TYPE.SUCCESS,
        autoClose: 1100,
        isLoading: false
      })
    }

    if (isError && loadingId !== null) {
      toast.update(loadingId, {
        render: 'Error',
        type: toast.TYPE.ERROR,
        autoClose: 1100,
        isLoading: false
      })
    }
  }, [isLoading])

  // get google user data
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => authHandler(codeResponse as IGoogleUser),
    onError: (error) => console.log('Login Failed:', error)
  })

  const authHandler = async (googleUser: IGoogleUser) => {
    const result = await trigger(googleUser)

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

  return (
    <button onClick={() => login()} className="my-3 ">
      <Google className="text-3xl text-white hover:text-[#a0a772]" />
    </button>
  )
}

export default GoogleAuthBtn
