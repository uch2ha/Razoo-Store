export type IFilters = {
  category: {
    [key: string]: boolean
    shampoo: boolean
    hairConditioner: boolean
    hairMask: boolean
    hairOil: boolean
  }
  size: {
    [key: string]: boolean
    '50ml': boolean
    '100ml': boolean
    '150ml': boolean
    '200ml': boolean
  }
  // HIGHEST PRICE | LOWEST PRICE | Name A-Z | Name Z-A
  sortBy: 'HP' | 'LP' | 'AZ' | 'ZA' | null
}
