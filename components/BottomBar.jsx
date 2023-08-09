'use client'

import "../styles/IdPage.css"
import VerticalDivider from "./VerticalDivider"
import { useContext, useRef } from "react"
import { CartContext } from "../context/CartContext"
import { useParams, useRouter } from "next/navigation"

export default function BottomBar () {

  const { state, totalPrice } = useContext(CartContext)
  const inputRef = useRef()
  const { menu } = useParams()
  const router = useRouter()
  
  if (totalPrice > 0 && inputRef.current) {
    inputRef.current.checked = true
  } else if (totalPrice === 0 && inputRef.current) {
    inputRef.current.checked = false
  }

  const goToCart = () => {
    router.push(`/${menu}/cart`)
  }

  return (
    <>
      <input type="checkbox" value={totalPrice} ref={inputRef} className="input-bottom-bar"/>
      <div className="main-container-bottom-bar" onClick={goToCart}>
        <div className="container-bottom-bar">
          <div className="info-bottom-bar">
            <div className="item-amount-bottom-bar">{state.length}</div>
            <VerticalDivider color={'green'} width={5} />
            <div className="price-bottom-bar">Total: {totalPrice} CUP</div>
          </div>
          <div>
            <button className="button-buy-bottom-bar">
              PAGAR
            </button>
          </div>
        </div>
      </div>
    </>
  )
}