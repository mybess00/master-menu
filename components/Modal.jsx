'use client'

import '../styles/Modal.css'
import { useState, useEffect, useContext, useReducer, useRef } from "react"
import { useRouter, useParams } from 'next/navigation'
import Image from "next/image"
import Link from 'next/link'
import ReactModal from "react-modal"
import HorizontalDivider from "./HorizontalDivider"
import { CartContext } from '../context/CartContext'
import { BiExpandAlt } from "react-icons/bi"

import { ACTION_MODAL, INITIAL_MODAL_STATE, modalReducer } from '../reducers/modalReducer'
import { ACTION_CART } from '../reducers/cartReducer'

export default function Modal ({ item }) {

  const { state, dispatch } = useContext(CartContext)
  const [stateModal, dispatchModal] = useReducer(modalReducer, INITIAL_MODAL_STATE)
  const [totalDiscount, setTotalDiscount] = useState(item.price - item.offer)
  const discount = item.price - item.offer
  const router = useRouter()
  const { menu, category } = useParams()
  const btnRef = useRef()

  const addItem = () => {
    dispatchModal({ type: ACTION_MODAL.SET_AMOUNT, payload: stateModal.quantity+1})
  }

  const removeItem = () => {
    if (stateModal.quantity != 1 ) {
      dispatchModal({ type: ACTION_MODAL.SET_AMOUNT, payload: stateModal.quantity-1})
    }
  }

  const onClose = () => {
    router.back()
  }

  const checkItem = (item) => {
    return state.some(element => element.item.id == item.id)
  }

  let isOnCart = checkItem(item)

  const addToCart = () => {
    if (!isOnCart) {
      dispatch({ type: ACTION_CART.ADD_ITEM, payload: {item, info: stateModal} })
      router.back()
    }
  }

  useEffect(() => {
    const newPrice = parseInt(item.price)*stateModal.quantity
    dispatchModal({ type: ACTION_MODAL.SET_TOTAL_PRICE, payload: newPrice})
    if (item.offer) {
      setTotalDiscount(discount*stateModal.quantity)
    }
  }, [stateModal.quantity])

  return (
    <ReactModal isOpen={true} role="dialog" className="modal" overlayClassName="overlay-modal" onRequestClose={onClose}>
      <div className="main-container-modal">
        <div className="image-container-modal">
        <Image src={item.image.src} alt={item.image.alt} loading="lazy" fill={true} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAQAAABKxSfDAAAAEElEQVR42mNkyGaAA0ZKOQBudgKJD8nILAAAAABJRU5ErkJggg=="/>
        </div>
        <div className="item-body-modal">
          <div className="item-name-modal">
            <h1>{item.title}</h1>
            {item.offer && (
              <div className="badge-offer-modal">OFERTA</div>
            )}
            <Link className='icon-expand-info' href={`/${menu}/${category}/${item.id}`} replace={true}>
              <BiExpandAlt/>
            </Link>
          </div>
          <div className="item-description-modal">
          <HorizontalDivider color={"gray"} height={2}/>
           <p>{item.description}</p>
          <HorizontalDivider color={"gray"} height={2}/>
          </div>
          <div className="item-options-modal">
            <div className="amount-options-modal">
              <div className="total-price-modal">
               {(stateModal.total).toFixed(2)} {item.coin}
              </div>
              <div className="amount-buttons-modal">
                <button className="button-amount-modal" onClick={removeItem}>
                  {'<'}
                </button>
                <div>
                  {stateModal.quantity}
                </div>
                <button className="button-amount-modal" onClick={addItem}>
                  {'>'}
                </button>
              </div>
            </div>
            <div className="buy-options-modal">
              {item.offer && (
                <p className='discount-modal'>
                  {`Ahorras ${totalDiscount} ${item.coin}`}
                </p>
              )}
              <button className={`btn-buy-modal ${isOnCart ? 'btn-active' : ''}`} onClick={addToCart} ref={btnRef}>
                {isOnCart ? 'EN EL CARRITO' : 'AÑADIR'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}