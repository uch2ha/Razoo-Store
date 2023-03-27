export type ICart = {
  userId: string | null
  cart: [
    {
      productId: string
      amount: number
    }
  ]
}
