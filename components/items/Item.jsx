import "styles/Items.scss"
import Image from "next/image"
import VerticalDivider from "../VerticalDivider"
import ButtonAddCart from "../ButtonAddCart"
import Link from "next/link"

export default function Item ({ item, baseLink, category }) {

  return (
    <div id={item.id} className="container-item">
      <Link className="image-item" href={`${baseLink}${item.id}`}>
        <Image src={item.image.src} alt={item.image.alt} loading="lazy" fill={true} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAQAAABKxSfDAAAAEElEQVR42mNkyGaAA0ZKOQBudgKJD8nILAAAAABJRU5ErkJggg=="/>
      </Link>
      <div className="body-item">
        <Link className="info-item" href={`${baseLink}${item.id}`}>
          <div className="container-title">
            <VerticalDivider color="red" width={5} />
            <div>
              <h3>{item.title}</h3>
              <p className="price-item">{`${item.price.toFixed(2)} ${item.coin}`}</p>
            </div>
          </div>
          {<p className="description-item">
            {item.description}
          </p>}
        </Link>
        <div className="container-btn">
          <ButtonAddCart id={item.id} price={`${item.price.toFixed(2)} ${item.coin}`} category={category}/>
        </div>
      </div>
    </div>
  )
}