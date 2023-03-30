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
