export type IOrder = {
  orderId: string
  status: 'IN_PROCESS' | 'IN_TRANSIT' | 'DELIVERED' | 'REJECTED'
  createdAt: string
  products: IOrderProduct[]
}

export type IOrderProduct = {
  productId: string
  name: string
  img: string
  size: '50ml' | '100ml' | '150ml' | '200ml'
  price: number
  quantity: number
}

export type IProduct = {
  productId: string
  img: string
  name: string
  description: string
  instruction: string
  category: 'SHAMPOO' | 'HAIRCONDITIONER' | 'HAIRMASK' | 'HAIROIL'
  size: '50ml' | '100ml' | '150ml' | '200ml'
  price: number
}

export type IUser = {
  email: string
  firstName: string
  lastName: string
  role: 'ADMIN' | 'USER' | ''
}
