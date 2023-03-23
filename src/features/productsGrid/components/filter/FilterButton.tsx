import React, { FC, MouseEvent } from 'react'

interface IFilterButtonProps {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
  title: string
  id: string
  styles?: string
}

const FilterButton: FC<IFilterButtonProps> = ({ handleClick, id, styles, title }) => {
  return (
    <button
      id={id}
      onClick={handleClick}
      className={'uppercase w-full pl-[30%] text-start py-2' + ' ' + styles}>
      {title}
    </button>
  )
}

export default FilterButton
