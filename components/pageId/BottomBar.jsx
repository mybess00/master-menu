import "../../styles/IdPage.css"
import VerticalDivider from "../VerticalDivider"

export default function BottomBar () {
  return (
    <div className="main-container-bottom-bar">
      <div className="container-bottom-bar">
        <div className="info-bottom-bar">
          <VerticalDivider color={'green'} width={5} />
          <div>Total: 185.00 CUP</div>
        </div>
        <div>
          <button className="button-buy-bottom-bar">
            PAGAR
          </button>
        </div>
      </div>
    </div>
  )
}