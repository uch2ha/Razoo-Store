import { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react'
import { getFiltersDataFromLS, setFiltersDataToLS } from '../../../../functions/localStorage'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
import { filtersActions } from '../../../../store/filters/filters.slice'
import FilterCheckBoxs from './FilterCheckBoxs'
import FilterButton from './FilterButton'
import SortByButton from './SortByButton'

const Filters: FC = () => {
  const [categoriesIsVisible, setCategoriesIsVisible] = useState(false)
  const [sizeIsVisible, setSizeIsVisible] = useState(false)
  const [firstLoading, setFirstLoading] = useState(true)

  // get filters from products store
  const filters = useSelector((state: RootState) => state.filters) || {}

  const { category, size } = filters

  const dispatch = useDispatch()

  // show or hide filter's categories
  const handleClick = (e: MouseEvent<HTMLButtonElement | SVGSVGElement>) => {
    if (e.currentTarget) {
      const target = e.currentTarget
      if (target.id === 'category') return setCategoriesIsVisible((prev) => !prev)
      if (target.id === 'size') return setSizeIsVisible((prev) => !prev)
    }

    if (e.target instanceof HTMLButtonElement) {
      const target = e.target as HTMLButtonElement
      if (target.id === 'category') return setCategoriesIsVisible((prev) => !prev)
      if (target.id === 'size') return setSizeIsVisible((prev) => !prev)
    }
  }

  const handleSortByClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    if (target instanceof HTMLButtonElement) {
      dispatch(filtersActions.setSortBy(target.id as 'HP' | 'LP' | 'AZ' | 'ZA'))
    }
  }

  // handle check or uncheck for filter's categories
  const handleCategoriesCheck = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.toggleCategory({ filter: 'category', name: e.target.id }))
  }

  // handle check or uncheck for filter's size
  const handleSizeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.toggleCategory({ filter: 'size', name: e.target.id }))
  }

  // reset all filters to false
  const handleReset = () => {
    dispatch(filtersActions.toggleReset())
  }

  // get filters settings from LS
  useEffect(() => {
    const { filters, categoriesIsVisible, sizeIsVisible } = getFiltersDataFromLS()
    if (filters) dispatch(filtersActions.applyFiltersData(filters))
    if (categoriesIsVisible !== undefined) setCategoriesIsVisible(categoriesIsVisible)
    if (sizeIsVisible !== undefined) setSizeIsVisible(sizeIsVisible)
    setFirstLoading(false)
  }, [])

  // save filters settings to LS
  useEffect(() => {
    if (!firstLoading) setFiltersDataToLS(filters, categoriesIsVisible, sizeIsVisible)
  }, [filters, categoriesIsVisible, sizeIsVisible])

  return (
    <div className="border-2 border-l-0 w-full h-full flex flex-col justify-start items-start rounded-tr-md rounded-br-md">
      <span className="uppercase w-full pl-[30%] text-start py-2 border-b-2 select-none">
        SORT BY
      </span>
      <div className="flex flex-col border-b-2 w-full">
        <SortByButton id="HP" title="HIGHEST PRICE" handleClick={handleSortByClick} />
        <SortByButton id="LP" title="LOWEST PRICE" handleClick={handleSortByClick} />
        <SortByButton id="AZ" title="Name A-Z" handleClick={handleSortByClick} />
        <SortByButton id="ZA" title="Name Z-A" handleClick={handleSortByClick} />
      </div>
      <FilterButton
        id="category"
        title="category"
        handleClick={handleClick}
        styles="border-b-2 w-full pl-[30%]"
        visible={categoriesIsVisible}
      />
      {categoriesIsVisible && (
        <FilterCheckBoxs handleClick={handleCategoriesCheck} filter={category} />
      )}
      <FilterButton
        id="size"
        title="size"
        handleClick={handleClick}
        styles="border-b-2 w-full pl-[30%]"
        visible={sizeIsVisible}
      />
      {sizeIsVisible && <FilterCheckBoxs handleClick={handleSizeCheck} filter={size} />}
      <FilterButton title="reset" handleClick={handleReset} styles="ml-[calc(30%-16px)] px-4" />
    </div>
  )
}

export default Filters
