import React, { ChangeEvent, FC } from 'react'
import FilterCheckBox from './FilterCheckBox'

export interface FilterCheckBoxs {
  handleClick: (e: ChangeEvent<HTMLInputElement>) => void
  filter: { [key: string]: boolean }
}

const FilterCheckBoxs: FC<FilterCheckBoxs> = ({ handleClick, filter }) => {
  const names = Object.keys(filter)

  return (
    <div className="flex flex-col items-start pl-[30%] border-b-2 w-full py-4">
      <FilterCheckBox handleClick={handleClick} filter={filter} name={names[0]} />
      <FilterCheckBox handleClick={handleClick} filter={filter} name={names[1]} />
      <FilterCheckBox handleClick={handleClick} filter={filter} name={names[2]} />
      <FilterCheckBox handleClick={handleClick} filter={filter} name={names[3]} />
    </div>
  )
}

export default FilterCheckBoxs
