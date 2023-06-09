// packages
import React, { FC, useState } from 'react'
// components
import { IServerProduct } from './AdminProducts'
import DropZone from '../../../../components/DropZone'

interface IProductFormProps {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, img?: FormData) => void
  product: IServerProduct
}

const ProductForm: FC<IProductFormProps> = ({ handleChange, handleSubmit, product }) => {
  const [img, setImg] = useState<FormData>()

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    handleSubmit(e, img)
  }

  return (
    <>
      <form onSubmit={(e) => submitForm(e)} className="w-full max-w-lg mx-auto my-auto">
        {product.productId && (
          <>
            <div className="w-full">
              <DropZone setImg={setImg} />
              {img && <p className="text-xl mb-2">File was uploaded</p>}
            </div>
          </>
        )}
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
            className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="w-full py-2 px-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={product.category}
            onChange={handleChange}>
            <option value="SHAMPOO">Shampoo</option>
            <option value="HAIRCONDITIONER">Hair Conditioner</option>
            <option value="HAIRMASK">Hair Mask</option>
            <option value="HAIROIL">Hair Oil</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="size" className="block text-gray-700 font-medium mb-2">
            Size
          </label>
          <select
            id="size"
            name="size"
            className="w-full py-2 px-3 border border-gray-300  shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
            className="shadow appearance-none border  w-full py-2 px-3 min-h-[150px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border  w-full py-2 px-3 min-h-[100px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            value={product.price}
            onChange={handleChange}
            className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-block py-4 px-10 border border-black text-sm font-medium  text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Create / Edit Product
        </button>
      </form>
    </>
  )
}

export default ProductForm
