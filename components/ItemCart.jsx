'use client'

import "../styles/ItemCart.css"
import { useContext, useEffect } from "react"
import { useParams } from "next/navigation"
import { CartContext } from "../context/CartContext"
import { ACTION_CART } from "../reducers/cartReducer"
import Image from "next/image"
import Link from "next/link"
import { MdDelete, MdModeEditOutline } from "react-icons/md"
import { TbEdit } from "react-icons/tb"

export default function ItemCart ({ item, info, index }) {

  const { state, dispatch } = useContext(CartContext)
  const { menu } = useParams()

  console.log(info)

  const infoItem = () => {
    if (info.agregos.length !== 0) {
      const description = info.agregos.map(element => {
        return `${element.name} (${element.quantity})`
      })
      return description.join(', ')
    }
  }

  const decrementAmount = () => {
    if (state[index].info.quantity !== 1) {
      dispatch({ type: ACTION_CART.SET_ITEM_AMOUNT, payload: { quantity: state[index].info.quantity-1, index: index} })
    } else (
      dispatch( { type: ACTION_CART.DELETE_ITEM_INDEX, payload: index })
    )
  }

  const incrementAmount = () => {
    dispatch({ type: ACTION_CART.SET_ITEM_AMOUNT, payload: { quantity: state[index].info.quantity+1, index: index} })
  }

  const deleteItem = () => {
    dispatch( { type: ACTION_CART.DELETE_ITEM_INDEX, payload: index })
  }
 
  return (
    <div className="item-cart-container">
      <div className="image-container">
        <Image src={item.image.src} alt={item.image.alt} loading="lazy" fill={true} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAQAAABKxSfDAAAAEElEQVR42mNkyGaAA0ZKOQBudgKJD8nILAAAAABJRU5ErkJggg=="/>
      </div>
      <div className="info-container">
        <h2>{item.title}</h2>
        <div>{infoItem()}</div>
        <div>{info.total.toFixed(2)} {item.coin}</div>
        <div className="option-container">
          <div className="amount-cart-container">
              <button className="button-amount-cart" onClick={decrementAmount}>
                {'<'}
              </button>
              <div>
                {state[index].info.quantity}
              </div>
              <button className="button-amount-cart" onClick={incrementAmount}>
                {'>'}
              </button>
          </div>
          <button className="button-delete" onClick={deleteItem}>
            <MdDelete/>
          </button>
          <Link href={`/${menu}/cart/${index}`}>
            <button className="button-edit">
              <TbEdit/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}