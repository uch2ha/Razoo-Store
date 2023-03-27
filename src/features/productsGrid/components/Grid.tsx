import React, { FC } from 'react'
import Card from './Card'
import Filters from './filter/Filters'
import { IProduct } from '../../../types'

interface IGridProps {
  products: IProduct[]
  setProductId: (id: number) => void
}

const Grid: FC<IGridProps> = ({ products, setProductId }) => {
  return (
    <div className="flex">
      <div className="xl:max-w-[25%] xl:min-w-[25%] lg:max-w-[30%] lg:min-w-[30%] max-w-[35%] min-w-[35%] mr-[0.5rem]">
        <Filters />
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 w-full border-[3px] gap-[3px] bg-black border-black">
        {products &&
          products.map((product) => {
            return (
              <Card
                key={product.id}
                category={product.category}
                name={product.name}
                price={product.price}
                size={product.size}
                id={product.id}
                setProductId={setProductId}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Grid
