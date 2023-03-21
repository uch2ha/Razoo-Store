export const initLocalStorage = (data: any) => {
  //set all fixed data to LS
  localStorage.setItem('users', JSON.stringify(data.users))
  localStorage.setItem('products', JSON.stringify(data.products))
  localStorage.setItem('orders', JSON.stringify(data.orders))
}
