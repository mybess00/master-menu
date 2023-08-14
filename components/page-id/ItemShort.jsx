import Image from "next/image"
import Link from "next/link"

export default function ItemShort ({ link, image, title, price, coin}) {
  return (
    <Link href={link} className="main-container-short">
      <div className="container-img-short">
        <Image src={image.src} alt={image.alt} loading="lazy" fill={true} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAQAAABKxSfDAAAAEElEQVR42mNkyGaAA0ZKOQBudgKJD8nILAAAAABJRU5ErkJggg=="/>
      </div>
      <div className="info-short">
        <h3>{title}</h3>
        <strong>
          {price.toFixed(2)} {coin}
        </strong>
      </div>
    </Link>
  )
}