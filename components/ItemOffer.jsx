import "../styles/ItemSection.css"
import VerticalDivider from "./VerticalDivider"
import ButtonAddCar from "./ButtonAddCar"

export default function ItemOffer ({ id, title, description, image, price, coin, offer }) {

  return (
    <div id={id} className="container-item">
      <div className="image-item">
        <div className="shape-offer">OFERTA</div>
        <img src={image.src} alt={image.alt}/>
      </div>
      <div className="body-item">
        <div className="info-item">
          <div className="container-title">
            <VerticalDivider color="red" width={5} />
            <h3>{title}</h3>
          </div>
          <p className="description-item">
            {description}
          </p>
        </div>
        <div className="container-btn">
          <div className="offer-price"> {price.toFixed(2)} </div>
          <ButtonAddCar id={id} price={`${offer.toFixed(2)} ${coin}`}/>
        </div>
      </div>
    </div>
  )
}