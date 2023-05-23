import axios from 'axios'

export const useGetProductImg = async (productId: string) => {
  const res = await axios.get(`http://localhost:8080/api/v1/products/${productId}/product-image`, {
    responseType: 'blob'
  })

  if (res.status === 200) {
    if (res.data?.size !== 0) {
      return URL.createObjectURL(res.data)
    }
  } else {
    console.log(res)
    throw new Error('Failed to fetch product image')
  }
}
