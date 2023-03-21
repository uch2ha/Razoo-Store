import React, { FC, useState } from 'react'

const Filters: FC = () => {
  const [categoriesVisible, setCategoriesVisible] = useState(true)
  const [sizeVisible, setSizeVisible] = useState(false)

  const handleClick = (e: any) => {
    if (e.target.id === 'categories') setCategoriesVisible((prev) => !prev)
    if (e.target.id === 'size') setSizeVisible((prev) => !prev)
  }

  return (
    <div className="bg-red-200 w-full h-full flex flex-col justify-start items-start">
      <p
        id="categories"
        onClick={(e) => handleClick(e)}
        className="border-t-4 border-b-4 w-full pl-[30%] text-start">
        CATEGORIES
      </p>
      {categoriesVisible && (
        <div className="flex flex-col items-start pl-[30%] border-b-4 w-full">
          <div>
            <input type="checkbox" id="shampoo" name="shampoo" onChange={() => console.log(123)} />
            <label htmlFor="shampoo">SHAMPOO</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hair-conditioner"
              name="hair-conditioner"
              onChange={() => console.log(123)}
            />
            <label htmlFor="hair-conditioner">HAIR CONDITIONER</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hair-mask"
              name="hair-mask"
              onChange={() => console.log(123)}
            />
            <label htmlFor="hair-mask">HAIR MASK</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hair-oil"
              name="hair-oil"
              onChange={() => console.log(123)}
            />
            <label htmlFor="hair-oil">HAIR OIL</label>
          </div>
        </div>
      )}
      <p
        id="size"
        onClick={(e) => handleClick(e)}
        className="border-b-4 w-full pl-[30%] text-start">
        SIZE
      </p>
      {sizeVisible && (
        <div className="flex flex-col items-start pl-[30%] border-b-4 w-full">
          <div>
            <input type="checkbox" id="shampoo" name="shampoo" onChange={() => console.log(123)} />
            <label htmlFor="shampoo">SHAMPOO</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hair-conditioner"
              name="hair-conditioner"
              onChange={() => console.log(123)}
            />
            <label htmlFor="hair-conditioner">HAIR CONDITIONER</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hair-mask"
              name="hair-mask"
              onChange={() => console.log(123)}
            />
            <label htmlFor="hair-mask">HAIR MASK</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hair-oil"
              name="hair-oil"
              onChange={() => console.log(123)}
            />
            <label htmlFor="hair-oil">HAIR OIL</label>
          </div>
        </div>
      )}
      <span className="w-full pl-[30%] text-start">reset</span>
    </div>
  )
}

export default Filters
