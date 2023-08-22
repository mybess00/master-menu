'use client'

import "../../styles/ItemFull.css"
import { useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { CartContext } from "../../context/CartContext"
import { EditItemContext } from "../../context/EditItemContext"
import { ACTION_CART } from "../../reducers/cartReducer"
import Image from "next/image"
import HorizontalDivider from "../HorizontalDivider"

export default function ItemEdit ({ index }) {

  const { state, dispatch } = useContext(CartContext)
  const router = useRouter()
  const { item, info } = state[index]
  const { order, setAmount, setItemPrice, setAgregoList } = useContext(EditItemContext)
  const [totalDiscount, setTotalDiscount] = useState(item.price - item.offer)
  const discount = item.price - item.offer

  const incrementAmount = () => {
    setAmount(order.amountItem+1)
  }

  const decrementAmount = () => {
    if (order.amountItem != 1) {
      setAmount(order.amountItem-1)
    }
  }

  const updateItem = () => {
    dispatch({ 
      type: ACTION_CART.UPDATE_ITEM, 
      payload: { 
        index, 
        order: { 
          item, 
          info: {
            'quantity': order.amountItem,
            'agregos': order.agregoList,
            'agregos_price': order.agregoPrice,
            'price': order.itemPrice,
            'total': order.totalPrice,
          }}}})
    router.back()
  }

  useEffect(() => {
    if (item.offer) {
      setTotalDiscount(discount*order.amountItem)
    }
  }, [order.amountItem])

  useEffect(() => {
    setAmount(info.quantity)
    setAgregoList(info.agregos)
    setItemPrice(item.offer ? item.offer : item.price)
  },[])
 
  return (
    <div className="main-container-id">
      <div className="image-container-id">
      <Image src={item.image.src} alt={item.image.alt} loading="lazy" fill={true} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAQAAABKxSfDAAAAEElEQVR42mNkyGaAA0ZKOQBudgKJD8nILAAAAABJRU5ErkJggg=="/>
      </div>
      <div className="item-body-id">
        <div className="item-name-id">
          <h1>{item.title}</h1>
          {item.offer && (
            <div className="badge-offer-id">OFERTA</div>
          )}
        </div>
        <div>
          Precio: {order.itemPrice.toFixed(2)} {item.coin}
        </div>
        <div className="item-description-id">
          <HorizontalDivider color={"gray"} height={2}/>
          <p>{item.description}</p>
          <HorizontalDivider color={"gray"} height={2}/>
        </div>
        <div className="item-description-id">
          <h4>Detalles del Pedido:</h4>
          <p>
            Precio del producto: <span>{item.offer ? item.offer.toFixed(2) : item.price.toFixed(2)}</span>
          </p>
          <p>
            Cantidad del producto: <span>{order.amountItem}</span>
          </p>
          {order.agregoPrice !== 0 && <p>
            Precio de los agregos por cada producto: <span>{order.agregoPrice.toFixed(2)}</span>
          </p>}
          <HorizontalDivider color={"gray"} height={2}/>
        </div>
        <div className="item-options-id">
          <div className="amount-options-id">
            <div className="total-price-id">
            Total: {order.totalPrice.toFixed(2)} {item.coin}
            </div>
            <div className="amount-buttons-id">
              <button className="button-amount-id" onClick={decrementAmount}>
                {'<'}
              </button>
              <div>
                {order.amountItem}
              </div>
              <button className="button-amount-id" onClick={incrementAmount}>
                {'>'}
              </button>
            </div>
          </div>
          <div className="buy-options-id">
            <button className="btn-buy-id" onClick={updateItem}>
              ACTUALIZAR
            </button>
            {item.offer && (
              <p className='discount-id'>
                {`Ahorras ${totalDiscount} ${item.coin}`}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}