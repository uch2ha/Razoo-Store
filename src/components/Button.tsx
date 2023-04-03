import { FC } from 'react'

interface IButtonProps {
  clickHandler: (label: string) => void
  label: string
  styles?: string
}

const Button: FC<IButtonProps> = ({ label, clickHandler, styles }) => {
  return (
    <button onClick={() => clickHandler(label)} className={` ${styles}`}>
      {label}
    </button>
  )
}

export default Button
