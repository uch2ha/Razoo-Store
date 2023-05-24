import { toast } from 'react-toastify'

export const popUpProductAddedToCart = (name = '') =>
  toast(`${name} added to cart`, {
    position: 'bottom-left',
    autoClose: 1250,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popUp700ms = (msg: string) =>
  toast(`${msg}`, {
    position: 'bottom-left',
    autoClose: 700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popUpSuccess700ms = (msg: string) =>
  toast.success(`${msg}`, {
    position: 'bottom-left',
    autoClose: 700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popUpError700ms = (msg: string) =>
  toast.error(`${msg}`, {
    position: 'bottom-left',
    autoClose: 700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })
