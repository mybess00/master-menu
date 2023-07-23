'use client'

import '../styles/Modal.css'
import ReactModal from "react-modal"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image"
import HorizontalDivider from "./HorizontalDivider"

export default function Modal ({ item }) {

  const [amount, setAmount] = useState(1)
  const [totalPrice, setTotalPrice] = useState(item.price)
  const [totalDiscount, setTotalDiscount] = useState(item.price - item.offer)
  const discount = item.price - item.offer
  const router = useRouter()

  const addItem = () => {
    setAmount(amount+1)
  }

  const removeItem = () => {
    if (amount != 1 ) {
      setAmount(amount-1)
    }
  }

  const onClose = () => {
    router.back()
  }

  useEffect(() => {
    setTotalPrice(parseInt(item.price)*amount)
    if (item.offer) {
      setTotalDiscount(discount*amount)
    }
  }, [amount])

  return (
    <ReactModal isOpen={true} role="dialog" className="modal" overlayClassName="overlay-modal" onRequestClose={onClose}>
      <div className="main-container">
        <div className="image-container">
        <Image src={item.image.src} alt={item.image.alt} loading="lazy" fill={true} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAQAAABKxSfDAAAAEElEQVR42mNkyGaAA0ZKOQBudgKJD8nILAAAAABJRU5ErkJggg=="/>
        </div>
        <div className="item-body">
          <div className="item-name">
            <h1>{item.title}</h1>
            {item.offer && (
              <div className="badge-offer">OFERTA</div>
            )}
          </div>
          <div className="item-description">
          <HorizontalDivider color={"gray"} height={2}/>
           <p>{item.description}</p>
          <HorizontalDivider color={"gray"} height={2}/>
          </div>
          <div className="item-options">
            <div className="amount-options">
              <div className="total-price">
               {(totalPrice).toFixed(2)} {item.coin}
              </div>
              <div className="amount-buttons">
                <button className="button-amount" onClick={removeItem}>
                  {'<'}
                </button>
                <div>
                  {amount}
                </div>
                <button className="button-amount" onClick={addItem}>
                  {'>'}
                </button>
              </div>
            </div>
            <div className="buy-options">
              {item.offer && (
                <p className='discount'>
                  {`Ahorras ${totalDiscount} ${item.coin}`}
                </p>
              )}
              <button className="btn-buy">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}