import { toast } from 'react-toastify'

export const popUpProductAddedToCart = (name = '') =>
  toast(`${name} added to cart`, {
    position: 'bottom-left',
    autoClose: 1300,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popUp1100ms = (msg: string) =>
  toast(`${msg}`, {
    position: 'bottom-left',
    autoClose: 1100,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popUpSuccess1100ms = (msg: string) =>
  toast.success(`${msg}`, {
    position: 'bottom-left',
    autoClose: 1100,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popUpError1100ms = (msg: string) =>
  toast.error(`${msg}`, {
    position: 'bottom-left',
    autoClose: 1100,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })
