import "../styles/ItemSection.css"
import VerticalDivider from "./VerticalDivider"
import Image from "next/image"

export default function ItemSpent ({ item }) {

  return (
    <div className="container-item" id={item.id}>
      <div className="image-item image-not-available">
        <div className="shape-not-available">AGOTADO</div>
        <div className="img-glass"></div>
        <Image src={item.image.src} alt={item.image.alt} fill={true} loading="lazy" placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAQAAABKxSfDAAAAEElEQVR42mNkyGaAA0ZKOQBudgKJD8nILAAAAABJRU5ErkJggg=="/>
      </div>
      <div className="body-item">
        <div className="info-item">
          <div className="container-title">
            <VerticalDivider color="gray" width={5} />
            <h3>{item.title}</h3>
          </div>
          <p className="description-item">
            {item.description}
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