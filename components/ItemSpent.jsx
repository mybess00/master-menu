import "../styles/ItemSection.css"
import VerticalDivider from "./VerticalDivider"

export default function ItemSpent ({ id, title, description, image }) {

  return (
    <div className="container-item" id={id}>
      <div className="image-item image-not-available">
        <div className="shape-not-available">AGOTADO</div>
        <div className="img-glass"></div>
        <img src={image.src} alt={image.alt} loading="lazy" placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAQAAABKxSfDAAAAEElEQVR42mNkyGaAA0ZKOQBudgKJD8nILAAAAABJRU5ErkJggg=="/>
      </div>
      <div className="body-item">
        <div className="info-item">
          <div className="container-title">
            <VerticalDivider color="gray" width={5} />
            <h3>{title}</h3>
          </div>
          <p className="description-item">
            {description}
          </p>
        </div>
        <div className="container-btn">
          <button className="btn-add-car not-available">
            AGOTADO
          </button>
        </div>
      </div>
    </div>
  )
}