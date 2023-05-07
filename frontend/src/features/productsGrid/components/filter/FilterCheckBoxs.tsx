// packages
import { ChangeEvent, FC } from 'react'
// components
import FilterCheckBox from './FilterCheckBox'

export interface FilterCheckBoxs {
  handleClick: (e: ChangeEvent<HTMLInputElement>) => void
  filter: { [key: string]: boolean }
  isVisible?: boolean
}

const FilterCheckBoxs: FC<FilterCheckBoxs> = ({ handleClick, filter, isVisible }) => {
  const names = Object.keys(filter)

  return (
    <div
      className={`flex flex-col items-start pl-[30%] w-full transition-all ease-in-out duration-500 max-h-0 overflow-hidden ${
        isVisible ? 'max-h-full border-b-[1px] py-4' : ''
      }`}>
      <FilterCheckBox handleClick={handleClick} filter={filter} name={names[0]} />
      <FilterCheckBox handleClick={handleClick} filter={filter} name={names[1]} />
      <FilterCheckBox handleClick={handleClick} filter={filter} name={names[2]} />
      <FilterCheckBox handleClick={handleClick} filter={filter} name={names[3]} />
    </div>
  )
}

export default FilterCheckBoxs
