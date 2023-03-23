import { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react'
import { getFiltersDataFromLS, setFiltersDataToLS } from '../../../functions/localStorage'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { filtersActions } from '../../../store/filters/filters.slice'

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
      if (target.id === 'categories') setCategoriesIsVisible((prev) => !prev)
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
    <div className="border-2 border-l-0 w-full h-full flex flex-col justify-start items-start">
      <button
        id="categories"
        onClick={handleClick}
        className="border-t-2 border-b-4 w-full pl-[30%] text-start">
        CATEGORIES
      </button>
      {categoriesIsVisible && (
        <div className="flex flex-col items-start pl-[30%] border-b-4 w-full">
          <div>
            <input
              type="checkbox"
              id="shampoo"
              name="shampoo"
              onChange={handleCategoriesCheck}
              checked={category.shampoo}
            />
            <label htmlFor="shampoo">SHAMPOO</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hairConditioner"
              name="hairConditioner"
              onChange={handleCategoriesCheck}
              checked={category.hairConditioner}
            />
            <label htmlFor="hairConditioner">HAIR CONDITIONER</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hairMask"
              name="hairMask"
              onChange={handleCategoriesCheck}
              checked={category.hairMask}
            />
            <label htmlFor="hairMask">HAIR MASK</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hairOil"
              name="hairOil"
              onChange={handleCategoriesCheck}
              checked={category.hairOil}
            />
            <label htmlFor="hairOil">HAIR OIL</label>
          </div>
        </div>
      )}
      <button id="size" onClick={handleClick} className="border-b-4 w-full pl-[30%] text-start">
        SIZE
      </button>
      {sizeIsVisible && (
        <div className="flex flex-col items-start pl-[30%] border-b-4 w-full">
          <div>
            <input
              type="checkbox"
              id="10ml"
              name="10ml"
              onChange={handleSizeCheck}
              checked={size['10ml']}
            />
            <label htmlFor="shampoo">10ml</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="25ml"
              name="25ml"
              onChange={handleSizeCheck}
              checked={size['25ml']}
            />
            <label htmlFor="25ml">25ml</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="50ml"
              name="50ml"
              onChange={handleSizeCheck}
              checked={size['50ml']}
            />
            <label htmlFor="50ml">50ml</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="100ml"
              name="100ml"
              onChange={handleSizeCheck}
              checked={size['100ml']}
            />
            <label htmlFor="100ml">100ml</label>
          </div>
        </div>
      )}
      <button onClick={handleReset} className="w-full pl-[30%] text-start">
        reset
      </button>
    </div>
  )
}

export default Filters
