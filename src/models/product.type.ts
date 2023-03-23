export type IProduct = {
  id: number
  name: string
  description: string
  category: 'shampoo' | 'hairConditioner' | 'hairMask' | 'hairOil'
  size: '10ml' | '25ml' | '50ml' | '100ml'
  price: number
}
