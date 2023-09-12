'use client'

import "./style.css"
import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import { ACTION_CART } from "../../../reducers/cartReducer"
import ItemCart from "../../../components/ItemCart"
import HorizontalDivider from "../../../components/HorizontalDivider"
import AlertDialog from "../../../components/AlertDialog"

export default function PageCart () {

  const { state, dispatch } = useContext(CartContext)
  const [alertShow, setAlertShow] = useState(false)

  const cleanCart = () => {
    dispatch({ type: ACTION_CART.CLEAN_CART })
  }

  const pay = () => {
    alert('Esto es un Demo, no tiene integrado pasarelas de pago.')
  }

  const handleCleanCart = () => {
    setAlertShow(true)
  }

  return (
    <section className="main-container">
      <AlertDialog 
        visibility={alertShow} 
        title="Alerta" 
        message="¿Está seguro que desea limpiar el carrito? Esta acción es irreversible."
        buttonPostive="Continuar"
        action={cleanCart}
        actionNegative={setAlertShow} />
      <div className="option-buttons">
        <button onClick={pay} className="button-pay">
          PAGAR
        </button>
        <button onClick={handleCleanCart} className="button-clean">
          LIMPIAR CARRITO
        </button>
      </div>
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