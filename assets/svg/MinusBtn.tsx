import { SVGProps } from 'react'

export function MinusBtn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6 13q-.425 0-.713-.288T5 12q0-.425.288-.713T6 11h12q.425 0 .713.288T19 12q0 .425-.288.713T18 13H6Z"></path>
    </svg>
  )
}
