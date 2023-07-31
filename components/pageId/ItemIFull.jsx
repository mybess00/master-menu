'use client'
import { useState, useEffect, useContext } from "react"
import { PageIdContext } from "../../context/PageIdContext"
import Image from 'next/image'
import HorizontalDivider from "../HorizontalDivider"
import Link from "next/link"

export default function ItemFull ({ data, menu, category, id }) {

  const { amountItem, setAmountItem, itemPrice, setItemPrice, agregoPrice, totalPrice } = useContext(PageIdContext)
  
  const categoryName = data["category"].find(({ id }) => id == category)
  const item = data[category].find((element) => element.id == id)

  const [totalDiscount, setTotalDiscount] = useState(item.price - item.offer)
  const discount = item.price - item.offer

  const addItem = () => {
    setAmountItem(prevState => prevState+1)
  }

  const removeItem = () => {
    if (amountItem != 1 ) {
      setAmountItem(prevState => prevState-1)
    }
  }

  useEffect(() => {
  //  setItemPrice(parseInt(item.price)*amountItem)
    if (item.offer) {
      setTotalDiscount(discount*amountItem)
    }
  }, [amountItem])

  useEffect(() => {
    if (item.offer) {
      setItemPrice(item.offer)
      return
    }
    setItemPrice(item.price)
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
          Categoría: 
          <Link href={`/${menu}/${category}`} replace={true} className="category-link-id"> {categoryName.name} </Link>
        </div>
        <div>
          Precio: {itemPrice.toFixed(2)} {item.coin}
        </div>
        <div className="item-description-id">
          <HorizontalDivider color={"gray"} height={2}/>
          <p>{item.description}</p>
          <HorizontalDivider color={"gray"} height={2}/>
        </div>
        <div className="item-description-id">
          <h4>Detalles del Pedido:</h4>
          <p>
            Precio del producto: <span>{itemPrice.toFixed(2)}</span>
          </p>
          <p>
            Cantidad del producto: <span>{amountItem}</span>
          </p>
          {agregoPrice !== 0 && <p>
            Precio de los agregos por cada producto: <span>{agregoPrice.toFixed(2)}</span>
          </p>}
          <HorizontalDivider color={"gray"} height={2}/>
        </div>
        <div className="item-options-id">
          <div className="amount-options-id">
            <div className="total-price-id">
            Total: {(totalPrice).toFixed(2)} {item.coin}
            </div>
            <div className="amount-buttons-id">
              <button className="button-amount-id" onClick={removeItem}>
                {'<'}
              </button>
              <div>
                {amountItem}
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