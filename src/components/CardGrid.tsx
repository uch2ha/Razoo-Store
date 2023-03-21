import React, { FC, useState } from 'react'
import Card from './Card'
import Filters from './Filters'

const CardGrid: FC = () => {
  const [filters, setFilters] = useState({
    categories: { shampoo: false, hairConditioner: false, hairMask: false, hairOil: false },
    size: { '10ml': false, '25ml': false, '50ml': false, '100ml': false }
  })

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 w-full ">
      <div className="row-start-1 row-end-[100]">
        <Filters setFilters={setFilters} filters={filters} />
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
