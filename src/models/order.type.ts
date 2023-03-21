export type IOrder = {
  orderId: number
  products: {
    productId: number
    amount: number
  }[]
  userId: number
  purchasedAt: string
}
