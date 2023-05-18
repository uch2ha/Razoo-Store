// // packages
// import { FC, useEffect, useState } from 'react'
// import { useGoogleLogin } from '@react-oauth/google'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// // components
// import { useLazyGetUserQuery } from '../../../store/api/googleAuth/googleAuth.api'
// import { IGoogleUser } from '../types/googleUser.type'
// import { userActions } from '../../../store/user/user.slice'
// import { IUser } from '../../../types'
// import { handleGoogleUserLogIn } from '../../../utilities/localStorage'
// import { Google } from '../../../assets/svg/Google'

// interface IGoogleAuthProps {
//   setError: (msg: string) => void
// }

// const GoogleAuthBtn: FC<IGoogleAuthProps> = ({ setError }) => {
//   const [googleUser, setGoogleUser] = useState<IGoogleUser | null>(null)

//   // fetch google user from google.api
//   const [trigger, result] = useLazyGetUserQuery()

//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   // get google user data
//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => setGoogleUser(codeResponse as IGoogleUser),
//     onError: (error) => console.log('Login Failed:', error)
//   })

//   // get google user Profile
//   useEffect(() => {
//     if (googleUser) {
//       trigger(googleUser.access_token)
//     }
//   }, [googleUser])

//   // save google user profile data to LS
//   useEffect(() => {
//     if (!result.isSuccess) return

//     const user: IUser = {
//       id: result.data.id,
//       firstName: result.data.given_name,
//       lastName: result.data.family_name,
//       email: result.data.email,
//       isGoogleLogin: true,
//       role: 'USER'
//     }

//     const res = handleGoogleUserLogIn(user)
//     if (res.success) {
//       dispatch(userActions.logIn(user))
//       navigate('/shop')
//     } else {
//       setError('Something went wrong')
//     }
//   }, [result])

//   return (
//     <button onClick={() => login()} className="my-3 ">
//       <Google className="text-3xl text-white hover:text-[#a0a772]" />
//     </button>
//   )
// }

// export default GoogleAuthBtn
