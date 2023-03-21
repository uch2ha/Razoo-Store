import React, { FC } from 'react'
import Card from './Card'
import Filters from './Filters'

const CardGrid: FC = () => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 w-full">
      <div className="row-start-1 row-end-[100]">
        <Filters />
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default CardGrid
