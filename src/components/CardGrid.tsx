import React, { FC, useState } from 'react'
import Card from './Card'
import Filters from './Filters'
import { IProduct } from '../models'

const CardGrid: FC = () => {
  const [products, setProducts] = useState<IProduct[]>(
    JSON.parse(localStorage.getItem('products') ?? '[]')
  )
  const [filters, setFilters] = useState({
    category: { shampoo: false, hairConditioner: false, hairMask: false, hairOil: false },
    size: { '10ml': false, '25ml': false, '50ml': false, '100ml': false }
  })

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 w-full gap-2">
      <div className="row-start-1 row-end-[100]">
        <Filters setFilters={setFilters} filters={filters} />
      </div>
      {products &&
        products.map((product) => {
          return (
            <Card
              key={product.id}
              category={product.category}
              name={product.name}
              price={product.price}
              size={product.size}
            />
          )
        })}
    </div>
  )
}

export default CardGrid
