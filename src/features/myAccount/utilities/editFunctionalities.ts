// import { useSelector } from 'react-redux'
// import { getUserByIdFromLS, setNewUsersDataToLS } from '../../../utilities/localStorage'
// import { RootState } from '../../../store/store'

// export const changeName = (name: string, userID: string): { err?: string; success: boolean } => {
//   name = name.trimEnd().trimStart()

//   const [firstName, lastName] = name.split(' ')

//   if (!firstName || !lastName) return { err: 'Invalid name', success: false }

//   const user = getUserByIdFromLS(userID)

//   if (!user) return { success: false, err: 'Invalid user ID' }

//   user.firstName = firstName
//   user.lastName = lastName

//   setNewUsersDataToLS(user)

//   return { success: true }
// }
