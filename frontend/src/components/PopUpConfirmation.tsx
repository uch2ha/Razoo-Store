import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ShowConfirmation = (callback: (confirmed: boolean) => void) => {
  const handleYes = () => {
    callback(true)
    toast.dismiss()
  }
  const handleNo = () => {
    callback(false)
    toast.dismiss()
  }

  toast(
    <div className="flex flex-col justify-center items-center text-center text-2xl py-4">
      <p>Do you want to proceed?</p>
      <div className="flex justify-center items-center mt-4 space-x-8">
        <button
          onClick={handleYes}
          className="border-[1px] p-2 text-[#898e68] hover:text-white hover:bg-[#898e68]">
          Yes
        </button>
        <button onClick={handleNo} className="border-[1px] p-2 hover:text-white hover:bg-gray">
          No
        </button>
      </div>
    </div>,
    {
      position: 'top-center',
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      pauseOnHover: false
    }
  )
}
