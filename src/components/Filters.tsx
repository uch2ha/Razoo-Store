import React, { ChangeEvent, FC, MouseEvent, useState } from 'react'

interface IFilters {
  categories: {
    [key: string]: boolean
    shampoo: boolean
    hairConditioner: boolean
    hairMask: boolean
    hairOil: boolean
  }
  size: {
    [key: string]: boolean
    '10ml': boolean
    '25ml': boolean
    '50ml': boolean
    '100ml': boolean
  }
}

interface IFiltersProps {
  setFilters: (prev: (prev: IFilters) => IFilters) => void
  filters: IFilters
}

const Filters: FC<IFiltersProps> = ({ setFilters, filters }) => {
  const { categories, size } = filters
  const [categoriesVisible, setCategoriesVisible] = useState(true)
  const [sizeVisible, setSizeVisible] = useState(false)

  // show or hide filter's categories
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    if (target instanceof HTMLButtonElement) {
      if (target.id === 'categories') setCategoriesVisible((prev) => !prev)
      if (target.id === 'size') setSizeVisible((prev) => !prev)
    }
  }

  const handleCategoriesCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.id
    setFilters((prev: IFilters) => {
      return {
        ...prev,
        categories: {
          ...prev.categories,
          [name]: !prev.categories[name]
        }
      }
    })
  }

  const handleSizeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.id
    setFilters((prev: IFilters) => {
      return {
        ...prev,
        size: {
          ...prev.size,
          [name]: !prev.size[name]
        }
      }
    })
  }

  const handleReset = () => {
    setFilters(() => {
      return {
        categories: { shampoo: false, hairConditioner: false, hairMask: false, hairOil: false },
        size: { '10ml': false, '25ml': false, '50ml': false, '100ml': false }
      }
    })
  }

  return (
    <div className="bg-red-200 w-full h-full flex flex-col justify-start items-start">
      <button
        id="categories"
        onClick={handleClick}
        className="border-t-4 border-b-4 w-full pl-[30%] text-start">
        CATEGORIES
      </button>
      {categoriesVisible && (
        <div className="flex flex-col items-start pl-[30%] border-b-4 w-full">
          <div>
            <input
              type="checkbox"
              id="shampoo"
              name="shampoo"
              onChange={handleCategoriesCheck}
              checked={categories.shampoo}
            />
            <label htmlFor="shampoo">SHAMPOO</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hairConditioner"
              name="hairConditioner"
              onChange={handleCategoriesCheck}
              checked={categories.hairConditioner}
            />
            <label htmlFor="hairConditioner">HAIR CONDITIONER</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hairMask"
              name="hairMask"
              onChange={handleCategoriesCheck}
              checked={categories.hairMask}
            />
            <label htmlFor="hairMask">HAIR MASK</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hairOil"
              name="hairOil"
              onChange={handleCategoriesCheck}
              checked={categories.hairOil}
            />
            <label htmlFor="hairOil">HAIR OIL</label>
          </div>
        </div>
      )}
      <button id="size" onClick={handleClick} className="border-b-4 w-full pl-[30%] text-start">
        SIZE
      </button>
      {sizeVisible && (
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
