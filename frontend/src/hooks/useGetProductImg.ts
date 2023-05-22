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

  // const res = await axios.get(`http://localhost:8080/api/v1/products/${productId}/product-image`, {
  //   responseType: 'blob'
  // })

  // if (res.status === 200) {
  //   return URL.createObjectURL(res.data)
  // }

  // console.log(res)

  // const [test, setTest] = useState('')
  // useEffect(() => {
  //   axios
  //     .get(
  //       'http://localhost:8080/api/v1/products/7d77ebf6-563a-4f2e-8bc3-3c9be0fb3c10/product-image',
  //       { headers: { Authorization: `Bearer ${token}` }, responseType: 'blob' }
  //     )
  //     .then((res) => {
  //       console.log(typeof res)
  //       // console.log(res.data)
  //       setTest(URL.createObjectURL(res.data))
  //     })
  // }, [])
  // if (test) {
  //   localStorage.setItem('test', test)
  // }
  // const { data, isLoading, isError, error } = useGetProductImageQuery()
  // console.log(isError)
  // console.log(error)
  // const img = URL.createObjectURL(data ?? new Blob())
  // console.log('img', img)
  // console.log('test', test)
  // if (!isLoading) {
  //   // imageUrl = URL.createObjectURL(data)
  //   console.log(imageUrl)
  // }
}
