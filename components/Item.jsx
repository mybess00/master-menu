import "../styles/ItemSection.css"
import Image from "next/image"
import VerticalDivider from "./VerticalDivider"
import ButtonAddCar from "./ButtonAddCar"
import Link from "next/link"

export default function Item ({ id, title, description, image, price, coin, baseLink, asBaseLink }) {

  return (
    <div id={id} className="container-item">
      <Link className="image-item" href={`${baseLink}${id}`}>
        <Image src={image.src} alt={image.alt} loading="lazy" fill={true} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAQAAABKxSfDAAAAEElEQVR42mNkyGaAA0ZKOQBudgKJD8nILAAAAABJRU5ErkJggg=="/>
      </Link>
      <div className="body-item">
        <Link className="info-item" href={`${baseLink}${id}`}>
          <div className="container-title">
            <VerticalDivider color="red" width={5} />
            <h3>{title}</h3>
          </div>
          <p className="description-item">
            {description}
          </p>
        </Link>
        <div className="container-btn">
          <ButtonAddCar id={id} price={`${price.toFixed(2)} ${coin}`}/>
        </div>
      </div>
    </div>
  )
}