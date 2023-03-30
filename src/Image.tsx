import { useState } from 'react'

interface Props {
  src: string
  alt: string
  className: string
}

function Image(props: Props) {
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  async function loadImage() {
    const image = await import(`./assets/productImg/${props.src}.png`)
    setImageSrc(image.default)
  }

  loadImage()

  if (imageSrc) return <img src={imageSrc} alt={props.alt} className={props.className} />
  return <div>error</div>
}

export default Image
