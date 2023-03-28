export type IOrder = {
  orderId: number
  products: {
    productId: number
    amount: number
  }[]
  userId: string
  purchasedAt: string
  status: 'delivered' | 'pending' | 'canceled'
  totalPrice: number
}
