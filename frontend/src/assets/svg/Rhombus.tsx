import { SVGProps } from 'react'

export function Rhombus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 6.46c-.28 0-.56.1-.78.32l-4.44 4.44c-.43.43-.43 1.13 0 1.56l4.44 4.44c.43.43 1.13.43 1.56 0l4.44-4.44c.43-.43.43-1.13 0-1.56l-4.44-4.44c-.22-.22-.5-.32-.78-.32Z"></path>
    </svg>
  )
}
