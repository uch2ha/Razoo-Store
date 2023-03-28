import { FC, MouseEventHandler } from 'react'

interface IButtonProps {
  clickHandler: (label: string) => void
  label: string
  styles?: string
  id?: string
}

const Button: FC<IButtonProps> = ({ id, label, clickHandler, styles }) => {
  return (
    <button onClick={() => clickHandler(label)} className={` ${styles}`}>
      {label}
    </button>
  )
}

export default Button
