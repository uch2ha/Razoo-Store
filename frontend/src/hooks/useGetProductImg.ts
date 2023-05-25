import axios from 'axios'

const URL = import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_VERSION

export const useGetProductImg = async (productId: string) => {
    const res = await axios.get(`${URL}/products/${productId}/product-image`, {
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
