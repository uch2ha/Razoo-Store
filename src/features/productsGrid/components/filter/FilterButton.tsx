import React, { FC, MouseEvent } from 'react'
import { ArrowDown } from '../../../../assets/svg/ArrowDown'
import { ArrowUp } from '../../../../assets/svg/ArrowUp'

interface IFilterButtonProps {
  handleClick: (e: MouseEvent<HTMLButtonElement | SVGSVGElement>) => void
  title: string
  visible?: boolean
  id?: string
  styles?: string
}

const FilterButton: FC<IFilterButtonProps> = ({ handleClick, id, styles, title, visible }) => {
  return (
    <button
      id={id}
      onClick={handleClick}
      className={'flex justify-between items-center uppercase text-start py-2' + ' ' + styles}>
      {title}
      {id &&
        (visible ? (
          <ArrowUp onClick={handleClick} className="mr-5 text-2xl" />
        ) : (
          <ArrowDown onClick={handleClick} className="mr-5 text-2xl" />
        ))}
    </button>
  )
}

export default FilterButton
