import "styles/Items.scss"
import Link from "next/link"
import Image from "next/image"
import VerticalDivider from "../VerticalDivider"
import ButtonAddCart from "../ButtonAddCart"

export default function ItemOffer ({ item, baseLink, category }) {

  return (
    <div id={item.id} className="container-item">
      <Link className="image-item" href={`${baseLink}${item.id}`}>
        <div className="shape-offer">OFERTA</div>
        <Image src={item.image.src} alt={item.image.alt} loading="lazy" fill={true} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAQAAABKxSfDAAAAEElEQVR42mNkyGaAA0ZKOQBudgKJD8nILAAAAABJRU5ErkJggg=="/>
      </Link>
      <div className="body-item">
        <Link className="info-item" href={`${baseLink}${item.id}`}>
          <div className="container-title">
            <VerticalDivider color="red" width={5} />
            <div>
              <h3>{item.title}</h3>
              <div className="price-item">
                {item.offer.toFixed(2)}
                <div className="offer-price"> {item.price.toFixed(2)} </div>
              </div>
            </div>
          </div>
          <p className="description-item">
            {item.description}
          </p>
        </Link>
        <div className="container-btn">
            <ButtonAddCart id={item.id} price={`${item.offer.toFixed(2)} ${item.coin}`} category={category} />
          </div>
      </div>
    </div>
  )
}