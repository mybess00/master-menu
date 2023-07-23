import "../styles/ItemSection.css"
import Link from "next/link"
import Image from "next/image"
import VerticalDivider from "./VerticalDivider"
import ButtonAddCar from "./ButtonAddCar"

export default function ItemOffer ({ id, title, description, image, price, coin, offer, baseLink, asBaseLink }) {

  return (
    <div id={id} className="container-item">
      <Link className="image-item" href={`${baseLink}${id}`}>
        <div className="shape-offer">OFERTA</div>
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
          <div className="offer-price"> {price.toFixed(2)} </div>
          <ButtonAddCar id={id} price={`${offer.toFixed(2)} ${coin}`}/>
        </div>
      </div>
    </div>
  )
}