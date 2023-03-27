import { FC, MouseEventHandler } from 'react'

interface IButtonProps {
  clickHandler: MouseEventHandler<HTMLButtonElement>
  label: string
  styles?: string
}

const Button: FC<IButtonProps> = ({ label, clickHandler, styles }) => {
  return (
    <button onClick={clickHandler} className={` ${styles}`}>
      {label}
    </button>
  )
}

export default Button
