import React, { FC } from 'react'
import Card from './Card'
import Filters from './Filters'
import { IProduct } from '../../../models'

interface IGridProps {
  products: IProduct[]
}

const Grid: FC<IGridProps> = ({ products }) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 w-full gap-2">
      <div className="row-start-1 xl:row-end-[5] lg:row-end-[7] ">
        <Filters />
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

export default Grid
