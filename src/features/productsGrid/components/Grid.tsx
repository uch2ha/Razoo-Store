import React, { FC } from 'react'
import Filters from './filter/Filters'

interface IGridProps {
  children: React.ReactNode
}

const Grid: FC<IGridProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="xl:max-w-[25%] xl:min-w-[25%] lg:max-w-[30%] lg:min-w-[30%] max-w-[35%] min-w-[35%] mr-[0.5rem]">
        <Filters />
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 w-full gap-2">{children}</div>
    </div>
  )
}

export default Grid
