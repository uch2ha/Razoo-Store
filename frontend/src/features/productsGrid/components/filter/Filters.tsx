// packages
import { ChangeEvent, FC, MouseEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// components
import { RootState } from '../../../../store/store'
import { filtersActions } from '../../../../store/filters/filters.slice'
import FilterCheckBoxs from './FilterCheckBoxs'
import FilterButton from './FilterButton'
import SortByButton from './SortByButton'

const Filters: FC = () => {
  // get filters from store
  const filters = useSelector((state: RootState) => state.filters) || {}
  const dispatch = useDispatch()

  const { category, size } = filters

  // if some of the filters are true
  // set category or size to visible
  const [categoriesIsVisible, setCategoriesIsVisible] = useState(
    Object.values(category).includes(true)
  )
  const [sizeIsVisible, setSizeIsVisible] = useState(Object.values(size).includes(true))

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

  return (
    <div className="border-[1px] border-l-0 w-full h-full flex flex-col justify-start items-start">
      <span className="uppercase w-full pl-[30%] text-start py-2 border-b-[1px] select-none font-[700]">
        SORT BY
      </span>
      <div className="flex flex-col border-b-[1px] w-full py-4 underline-offset-2">
        <SortByButton id="HP" title="HIGHEST PRICE" handleClick={handleSortByClick} />
        <SortByButton id="LP" title="LOWEST PRICE" handleClick={handleSortByClick} />
        <SortByButton id="AZ" title="Name A-Z" handleClick={handleSortByClick} />
        <SortByButton id="ZA" title="Name Z-A" handleClick={handleSortByClick} />
      </div>
      <FilterButton
        id="category"
        title="category"
        handleClick={handleClick}
        styles="border-b-[1px] w-full pl-[30%] font-[700]"
        visible={categoriesIsVisible}
      />
      <FilterCheckBoxs
        handleClick={handleCategoriesCheck}
        filter={category}
        isVisible={categoriesIsVisible}
      />
      <FilterButton
        id="size"
        title="size"
        handleClick={handleClick}
        styles="border-b-[1px] w-full pl-[30%] font-[700]"
        visible={sizeIsVisible}
      />
      <FilterCheckBoxs handleClick={handleSizeCheck} filter={size} isVisible={sizeIsVisible} />
      <FilterButton
        title="reset"
        handleClick={handleReset}
        styles="ml-[calc(30%-16px)] px-4 underline underline-offset-2"
      />
    </div>
  )
}

export default Filters
