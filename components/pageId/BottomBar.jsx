'use client'

import "../../styles/IdPage.css"
import VerticalDivider from "../VerticalDivider"
import { useCart } from "../../hooks/useCart"

export default function BottomBar () {

  const { cleanCart } = useCart()

  return (
    <div className="main-container-bottom-bar">
      <div className="container-bottom-bar">
        <div className="info-bottom-bar">
          <VerticalDivider color={'green'} width={5} />
          <div>Total: 0 CUP</div>
        </div>
        <div>
          <button className="button-buy-bottom-bar" onClick={() => cleanCart()}>
            PAGAR
          </button>
        </div>
      </div>
    </div>
  )
}