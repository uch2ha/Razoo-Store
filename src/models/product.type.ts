export type IProduct = {
  id: number
  name: string
  description: string
  categories: 'shampoo' | 'hairConditioner' | 'hairMask' | 'hairOil'
  sizes: '10ml' | '25ml' | '50ml' | '100ml'
  price: number
}
