import "../styles/ItemSection.css"
import VerticalDivider from "./VerticalDivider"
import ButtonAddCar from "./ButtonAddCar"

export default function Item ({ id, title, description, image, price, coin }) {

  return (
    <div id={id} className="container-item">
      <div className="image-item">
        <img src={image.src} alt={image.alt} loading="lazy"/>
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
          <ButtonAddCar id={id} price={`${price.toFixed(2)} ${coin}`}/>
        </div>
      </div>
    </div>
  )
}