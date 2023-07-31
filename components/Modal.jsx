'use client'

import '../styles/Modal.css'
import { useState, useEffect } from "react"
import { useRouter, useParams } from 'next/navigation'
import Image from "next/image"
import Link from 'next/link'
import ReactModal from "react-modal"
import HorizontalDivider from "./HorizontalDivider"
import { BiExpandAlt } from "react-icons/bi"

export default function Modal ({ item }) {

  const [amount, setAmount] = useState(1)
  const [totalPrice, setTotalPrice] = useState(item.price)
  const [totalDiscount, setTotalDiscount] = useState(item.price - item.offer)
  const discount = item.price - item.offer
  const router = useRouter()
  const { menu, category } = useParams()

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
               {(totalPrice).toFixed(2)} {item.coin}
              </div>
              <div className="amount-buttons-modal">
                <button className="button-amount-modal" onClick={removeItem}>
                  {'<'}
                </button>
                <div>
                  {amount}
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
              <button className="btn-buy-modal">
                AÑADIR
              </button>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}