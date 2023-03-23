import React, { FC, useState } from 'react'
import Card from './Card'
import Filters from './Filters'
import { IProduct } from '../../../models'
import { useFilterProducts } from '../hooks/useFilterProducts'

interface IProductsGridProps {
  products: IProduct[]
}

const ProductsGrid: FC<IProductsGridProps> = ({ products }) => {
  const [filters, setFilters] = useState({
    category: { shampoo: false, hairConditioner: false, hairMask: false, hairOil: false },
    size: { '10ml': false, '25ml': false, '50ml': false, '100ml': false }
  })

  const filteredProducts = useFilterProducts(products, filters)

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 w-full gap-2">
      <div className="row-start-1 xl:row-end-[5] lg:row-end-[7]  ">
        <Filters setFilters={setFilters} filters={filters} />
      </div>
      {filteredProducts &&
        filteredProducts.map((product) => {
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

export default ProductsGrid
