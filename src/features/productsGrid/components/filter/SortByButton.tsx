import React, { FC, MouseEvent } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'

interface ISortByButtonProps {
  title: string
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
  id: string
}

const SortByButton: FC<ISortByButtonProps> = ({ title, handleClick, id }) => {
  // get filters from products store
  const filters = useSelector((state: RootState) => state.filters) || {}
  let active = ''
  if (filters.sortBy === id) active = 'bg-red-100'

  return (
    <button
      id={id}
      className={'py-2 text-start pl-[30%] w-full hover:bg-red-200' + ' ' + active}
      onClick={handleClick}>
      {title}
    </button>
  )
}
export default SortByButton
