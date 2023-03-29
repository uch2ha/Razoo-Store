export type IProduct = {
  id: string
  name: string
  description: string
  instruction: string
  category: 'shampoo' | 'hairConditioner' | 'hairMask' | 'hairOil'
  size: '50ml' | '100ml' | '150ml' | '200ml'
  price: number
}
