import React, { FC } from 'react'
import { IProduct } from '../../../../types/product.type'

interface IProductFormProps {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  product: IProduct
}

const ProductForm: FC<IProductFormProps> = ({ handleChange, handleSubmit, product }) => {
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
          Id
        </label>
        <input
          type="text"
          name="id"
          id="id"
          value={product.id}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={product.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
          Category
        </label>
        <select
          id="category"
          name="category"
          className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={product.category}
          onChange={handleChange}>
          <option value="shampoo">Shampoo</option>
          <option value="hairConditioner">Hair Conditioner</option>
          <option value="hairMask">Hair Mask</option>
          <option value="hairOil">Hair Oil</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="size" className="block text-gray-700 font-medium mb-2">
          Size
        </label>
        <select
          id="size"
          name="size"
          className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={product.size}
          onChange={handleChange}>
          <option value="50ml">50ml</option>
          <option value="100ml">100ml</option>
          <option value="150ml">150ml</option>
          <option value="200ml">200ml</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={product.description}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 min-h-[150px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="instruction" className="block text-gray-700 font-bold mb-2">
          Instruction
        </label>
        <textarea
          name="instruction"
          id="instruction"
          value={product.instruction}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 min-h-[100px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={product.price}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-block py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Create / Edit Product
      </button>
    </form>
  )
}

export default ProductForm
