export interface IFilters {
  categories: {
    [key: string]: boolean
    shampoo: boolean
    hairConditioner: boolean
    hairMask: boolean
    hairOil: boolean
  }
  size: {
    [key: string]: boolean
    '10ml': boolean
    '25ml': boolean
    '50ml': boolean
    '100ml': boolean
  }
}
