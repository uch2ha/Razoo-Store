import { FC, useState } from 'react'
import Grid from './Grid'
import { usePaginate } from '../hooks/usePaginate'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useFilterProducts } from '../hooks/useFilterProducts'
import { Rhombus } from '../../../assets/svg/Rhombus'
import { ArrowLeft } from '../../../assets/svg/ArrowLeft'
import { ArrowRight } from '../../../assets/svg/ArrowRight'
import { getAllProductsFromLS } from '../../../utilities/localStorage'

interface IProductsGridComponentProps {
  setProductId: (id: number) => void
  isAdmin?: boolean
  setIsVisible?: (b: boolean) => void
  setIsEditProductId?: (n: number) => void
}

const ProductsGridComponent: FC<IProductsGridComponentProps> = ({
  setProductId,
  isAdmin = false,
  setIsVisible,
  setIsEditProductId
}) => {
  const [currentPage, setCurrentPage] = useState(1)

  // get product list from LS
  const products = getAllProductsFromLS()

  // get filters from products store
  const filters = useSelector((state: RootState) => state.filters) || {}

  const filteredProducts = useFilterProducts(products, filters)

  const totalPages = Math.ceil(filteredProducts.length / 12)

  // after filtering may happen that u will be on the not existing page number
  // this fixes it
  if (currentPage > totalPages && currentPage !== 1) setCurrentPage(1)

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
    <div className="w-full md:w-[91%] self-start flex flex-col mb-10">
      <div className="flex self-end justify-between xl:w-[calc(75%-0.5rem)] lg:w-[calc(70%-0.5rem)] w-[calc(65%-0.5rem)]">
        <div className="flex space-x-5">
          <p className="flex items-center font-bold text-2xl">
            Products
            <Rhombus className="text-base" />
            {filteredProducts.length}
          </p>
          {isAdmin && setIsVisible && (
            <button className="border-2 my-2 px-5" onClick={() => setIsVisible(true)}>
              ADD PRODUCT
            </button>
          )}
        </div>
        <div className="mb-2 text-2xl flex justify-center items-center border-2 rounded-md">
          <button className="h-full p-2" onClick={handlePrevPage}>
            <ArrowLeft />
          </button>
          <p className="px-2 py-1 select-none text-lg">
            {currentPage} / {totalPages}
          </p>
          <button className="h-full p-2" onClick={handleNextPage}>
            <ArrowRight />
          </button>
        </div>
      </div>
      <Grid
        products={productsAfterPaginate}
        setProductId={setProductId}
        isAdmin={isAdmin}
        setIsVisible={setIsVisible}
        setIsEditProductId={setIsEditProductId}
      />
    </div>
  )
}

export default ProductsGridComponent
