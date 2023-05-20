import { IMineOrderData } from '../../../store/api/orders.api'
import { IOrder } from '../../../types'

export const useOrderDataFilter = (data: IMineOrderData[]): IOrder[] => {
  const result: IOrder[] = []

  const createOneOrder = (order: IMineOrderData): IOrder => {
    return {
      orderId: order.orderId,
      status: order.status,
      createdAt: order.createdAt,
      products: [
        {
          productId: order.productId,
          name: order.productName,
          img: order.productImage,
          price: order.productPrice,
          quantity: order.productQuantity,
          size: order.productSize
        }
      ]
    }
  }

  const addNewProduct = (existingOrder: IOrder, order: IMineOrderData) => {
    existingOrder.products.push({
      productId: order.productId,
      name: order.productName,
      img: order.productImage,
      price: order.productPrice,
      quantity: order.productQuantity,
      size: order.productSize
    })
  }

  data.forEach((order) => {
    const existingOrder = result.find((o) => o.orderId === order.orderId)

    if (existingOrder) {
      addNewProduct(existingOrder, order)
    } else {
      const oneOrder: IOrder = createOneOrder(order)
      result.push(oneOrder)
    }
  })

  return result
}
