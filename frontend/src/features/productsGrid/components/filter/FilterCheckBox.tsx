// packages
import { FC } from 'react'
// components
import { FilterCheckBoxs } from './FilterCheckBoxs'

export interface FilterCheckBox extends FilterCheckBoxs {
  name: string
}

const FilterCheckBox: FC<FilterCheckBox> = ({ handleClick, filter, name }) => {
  return (
    <div className="py-[4px] uppercase select-none">
      <input
        type="checkbox"
        id={name}
        name={name}
        onChange={handleClick}
        checked={filter[name]}
        className="accent-[#898e68]"
      />
      <label htmlFor={name} className="px-2">
        {name}
      </label>
    </div>
  )
}

export default FilterCheckBox
