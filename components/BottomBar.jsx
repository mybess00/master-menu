'use client'

import "/styles/BottomBar.scss"
import { useContext, useRef } from "react"
import { CartContext } from "../context/CartContext"
import { useRouter } from "next/navigation"
import { MenuContext } from "../context/MenuContext"

export default function BottomBar () {

  const { state, totalPrice } = useContext(CartContext)
  const { ConfigData } = useContext(MenuContext)
  const inputRef = useRef()
  const router = useRouter()
  
  if (totalPrice > 0 && inputRef.current) {
    inputRef.current.checked = true
  } else if (totalPrice === 0 && inputRef.current) {
    inputRef.current.checked = false
  }

  const goToCart = () => {
    router.push(`/${ConfigData.id}/cart`)
  }

  const pay = () => {
    alert('Esto es un Demo, no tiene integrado pasarelas de pago.')
  }

  return (
    <>
      <input type="checkbox" ref={inputRef} className="input-bottom-bar"/>
      <div className="main-container-bottom-bar" onClick={goToCart}>
        <div className="container-bottom-bar">
          <div className="info-bottom-bar">
            <div className="item-amount-bottom-bar">{state.length}</div>
            <div className="price-bottom-bar">Total: {totalPrice} CUP</div>
          </div>
          <div className="container-btn-buy">
            <button className="button-buy-bottom-bar" onClick={pay}>
              PAGAR
            </button>
          </div>
        </div>
      </div>
    </>
  )
}