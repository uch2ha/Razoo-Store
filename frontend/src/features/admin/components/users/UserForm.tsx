// packages
import React, { FC } from 'react'
// components
import { IUser } from '../../../../types'

interface IUserFormProps {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  user: IUser
}

const UserForm: FC<IUserFormProps> = ({ handleChange, handleSubmit, user }) => {
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto my-auto">
      <div className="mb-4">
        <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
          Id
        </label>
        <input
          type="text"
          name="id"
          id="id"
          value={user.id}
          onChange={handleChange}
          className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
          FirstName
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={user.firstName}
          onChange={handleChange}
          className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
          LastName
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={user.lastName}
          onChange={handleChange}
          className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
          role
        </label>
        <select
          id="role"
          name="role"
          className="w-full py-2 px-3 border border-gray-300  shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={user.role}
          onChange={handleChange}>
          <option value="ADMIN">ADMIN</option>
          <option value="USER">USER</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="isGoogleLogin" className="block text-gray-700 font-medium mb-2">
          IsGoogleLogin
        </label>
        <select
          id="isGoogleLogin"
          name="isGoogleLogin"
          className="w-full py-2 px-3 border border-gray-300  shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={user.isGoogleLogin ? 'true' : 'false'}
          onChange={handleChange}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Password
        </label>
        <input
          type="string"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
          className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-block py-3 px-10 border border-transparent text-sm font-medium  text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Create / Edit User
      </button>
    </form>
  )
}

export default UserForm
