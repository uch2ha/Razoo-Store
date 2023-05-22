// packages
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// components
import Grid from './Grid'
import { usePaginate } from '../hooks/usePaginate'
import { RootState } from '../../../store/store'
import { useFilterProducts } from '../hooks/useFilterProducts'
import { Rhombus } from '../../../assets/svg/Rhombus'
import { ArrowLeft } from '../../../assets/svg/ArrowLeft'
import { ArrowRight } from '../../../assets/svg/ArrowRight'
import Card from './Card'
import { useGetAllProductsQuery } from '../../../store/api/products.api'

interface IProductsGridComponentProps {
  setProductId: (id: string) => void
  setIsVisible?: (b: boolean) => void
  setIsEditProductId?: (n: string) => void
}

const ProductsGridComponent: FC<IProductsGridComponentProps> = ({
  setProductId,
  setIsVisible,
  setIsEditProductId
}) => {
  const [currentPage, setCurrentPage] = useState(1)

  // get info about fetching products process
  const { isError, isLoading } = useGetAllProductsQuery()

  const products = useSelector((state: RootState) => state.products)

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
    <div className="w-full md:w-[91%] self-start flex flex-col mb-10 ">
      <div className="flex self-end justify-between xl:w-[calc(75%-0.5rem)] lg:w-[calc(70%-0.5rem)] w-[calc(65%-0.5rem)]">
        <div className="flex space-x-5">
          <p className="flex items-center font-bold text-xl">
            Products
            <Rhombus className="text-base" />
            {filteredProducts.length}
          </p>
          {setIsVisible && (
            <button
              className="border-[1px] my-2  text-xl px-5 bg-[#898e68]/50"
              onClick={() => setIsVisible(true)}>
              ADD PRODUCT
            </button>
          )}
        </div>
        <div className="mb-2 text-2xl flex justify-center items-center border-[1px]">
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
      <Grid>
        {isLoading && <h1 className="col-span-full mx-auto my-4 text-4xl py-2 px-6">Loading...</h1>}
        {isError && (
          <h1 className="col-span-full mx-auto my-4 text-4xl py-2 px-6">Something went wrong...</h1>
        )}
        {!isLoading &&
          !isError &&
          productsAfterPaginate.map((product) => {
            return (
              <Card
                key={product.productId}
                product={product}
                setProductId={setProductId}
                setIsEditProductId={setIsEditProductId}
                setIsVisible={setIsVisible}
              />
            )
          })}
      </Grid>
    </div>
  )
}

export default ProductsGridComponent
