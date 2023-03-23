import { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react'
import { getFiltersDataFromLS, setFiltersDataToLS } from '../../../../functions/localStorage'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
import { filtersActions } from '../../../../store/filters/filters.slice'
import FilterCheckBoxs from './FilterCheckBoxs'
import FilterButton from './FilterButton'

const Filters: FC = () => {
  const [categoriesIsVisible, setCategoriesIsVisible] = useState(false)
  const [sizeIsVisible, setSizeIsVisible] = useState(false)
  const [firstLoading, setFirstLoading] = useState(true)

  // get filters from products store
  const filters = useSelector((state: RootState) => state.filters) || {}

  const { category, size } = filters

  const dispatch = useDispatch()

  // show or hide filter's categories
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    if (target instanceof HTMLButtonElement) {
      if (target.id === 'category') setCategoriesIsVisible((prev) => !prev)
      if (target.id === 'size') setSizeIsVisible((prev) => !prev)
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
      <FilterButton id="category" handleClick={handleClick} styles="border-b-2" />
      {categoriesIsVisible && (
        <FilterCheckBoxs handleClick={handleCategoriesCheck} filter={category} />
      )}
      <FilterButton id="size" handleClick={handleClick} styles="border-b-2" />
      {sizeIsVisible && <FilterCheckBoxs handleClick={handleSizeCheck} filter={size} />}
      <FilterButton id="reset" handleClick={handleReset} />
    </div>
  )
}

export default Filters
