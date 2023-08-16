'use client'

import "./style.css"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import ItemCart from "../../../components/ItemCart"
import HorizontalDivider from "../../../components/HorizontalDivider"
import { ACTION_CART } from "../../../reducers/cartReducer"

export default function PageCart () {

  const { state, dispatch } = useContext(CartContext)

  const cleanCart = () => {
    dispatch({ type: ACTION_CART.CLEAN_CART })
  }

  return (
    <section className="main-container">
      <button onClick={cleanCart} className="button-clean">
        LIMPIAR CARRITO
      </button>
      <div className="container-items-cart">
        {state.length !== 0 ? state.map((element, index) => {
          return  <>
                    <ItemCart item={element.item} info={element.info} index={index} key={index}/>
                    <HorizontalDivider height={1} color='gray'/>
                  </>
        }) : <div>El carrito está vacío</div>}
      </div>
    </section>
  )
}