export type IOrder = {
  orderId: string
  products: {
    productId: string
    amount: number
  }[]
  userId: string
  purchasedAt: string
  status: 'delivered' | 'pending' | 'canceled'
  totalPrice: number
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
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'ADMIN' | 'USER'
  isGoogleLogin: boolean | null
  password?: string
}
