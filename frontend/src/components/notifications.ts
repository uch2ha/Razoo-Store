import { toast } from 'react-toastify'

export const popUpProductAddedToCart = (name = '') =>
  toast(`${name} added to cart`, {
    position: 'bottom-left',
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popUpRemovedFromCart = () =>
  toast(`Removed from cart`, {
    position: 'bottom-left',
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popUpOrderCreated = () =>
  toast.success(`Order creation succeed`, {
    position: 'bottom-left',
    autoClose: 700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popUpLogOut = () =>
  toast.success(`You’ve Been Logged Out`, {
    position: 'bottom-left',
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popUpLogIn = () =>
  toast.success(`LogIn succeeded`, {
    position: 'bottom-left',
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popLoading = () =>
  toast(`Loading...`, {
    position: 'bottom-left',
    autoClose: 700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popUpError = () =>
  toast.error(`Something went wrong`, {
    position: 'bottom-left',
    autoClose: 700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popUpDeleted = () =>
  toast.success(`Deleted`, {
    position: 'bottom-left',
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })

export const popUpSucceed = () =>
  toast.success(`Succeed`, {
    position: 'bottom-left',
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })
