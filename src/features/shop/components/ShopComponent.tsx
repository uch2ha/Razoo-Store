import React, { FC, useState } from 'react'
import CardGrid from './CardGrid'
import { IProduct } from '../../../models'
import { usePaginate } from '../hooks/usePaginate'

const ShopComponent: FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

  // get product list from LS
  const products: IProduct[] = JSON.parse(localStorage.getItem('products') ?? '[]')
  const totalPages = Math.ceil(products.length / 12)

  // product list after pagination
  const productsAfterPaginate = usePaginate(products, currentPage)

  const handlePrevPage = () => {
    setCurrentPage((prev) => {
      // don't allow u navigate to page 0
      if (prev > 1) return --prev
      return prev
    })
  }
  const handleNextPage = () => {
    setCurrentPage((prev) => {
      if (prev < totalPages) return ++prev
      return prev
    })
  }

  return (
    <div className="w-full md:w-[91%] self-start flex flex-col mb-10">
      <div className="w-fit self-end my-4">
        <button className="border-2 px-4 py-2" onClick={handlePrevPage}>
          «
        </button>
        <button className="border-2 px-4 py-2 mx-4">
          {currentPage} / {totalPages}
        </button>
        <button className="border-2 px-4 py-2" onClick={handleNextPage}>
          »
        </button>
      </div>
      <CardGrid products={productsAfterPaginate} />
    </div>
  )
}

export default ShopComponent
