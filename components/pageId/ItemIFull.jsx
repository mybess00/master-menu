'use client'
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import HorizontalDivider from "../HorizontalDivider"
import Link from "next/link"

export default function ItemFull ({ data, menu, category, id }) {
  
  const categoryName = data["category"].find(({ id }) => id == category)
  const item = data[category].find((element) => element.id == id)

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

  useEffect(() => {
    setTotalPrice(parseInt(item.price)*amount)
    if (item.offer) {
      setTotalDiscount(discount*amount)
    }
  }, [amount])

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
          Categoría: 
          <Link href={`/${menu}/${category}`} replace={true} className="category-link-id"> {categoryName.name} </Link>
        </div>
        <div>
          Precio: {item.price.toFixed(2)} {item.coin}
        </div>
        <div className="item-description-id">
          <HorizontalDivider color={"gray"} height={2}/>
          <p>{item.description}</p>
          <HorizontalDivider color={"gray"} height={2}/>
        </div>
        <div className="item-options-id">
          <div className="amount-options-id">
            <div className="total-price-id">
            {(totalPrice).toFixed(2)} {item.coin}
            </div>
            <div className="amount-buttons-id">
              <button className="button-amount-id" onClick={removeItem}>
                {'<'}
              </button>
              <div>
                {amount}
              </div>
              <button className="button-amount-id" onClick={addItem}>
                {'>'}
              </button>
            </div>
          </div>
          <div className="buy-options-id">
            <button className="btn-buy-id">
              AÑADIR
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