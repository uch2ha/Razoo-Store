import { FC, useState } from 'react'
import Grid from './Grid'
import { usePaginate } from '../hooks/usePaginate'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useFilterProducts } from '../hooks/useFilterProducts'

const ProductsGridComponent: FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

  // get product list from global store
  const products = useSelector((state: RootState) => state.products) || []

  // get filters from products store
  const filters = useSelector((state: RootState) => state.filters) || {}

  const filteredProducts = useFilterProducts(products, filters)

  const totalPages = Math.ceil(filteredProducts.length / 12)

  // after filtering may happen that u will be on the not existing page number
  // this fixes it
  if (currentPage > totalPages) setCurrentPage(totalPages)

  // product list after pagination
  const productsAfterPaginate = usePaginate(filteredProducts, currentPage)

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
    <div className="w-full  md:w-[91%] self-start flex flex-col mb-10">
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
      <Grid products={productsAfterPaginate} />
    </div>
  )
}

export default ProductsGridComponent
