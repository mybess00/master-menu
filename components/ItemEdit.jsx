'use client'

import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { orderReducer, ACTION_TYPES } from "../reducers/orderReducer"

export default function ItemEdit ({ item, info, index }) {

  const { state, dispatch } = useContext(CartContext)

  const INITIAL_STATE = {
    itemPrice: item.offer ? item.offer : item.price,
    amountItem: 1,
    agregoList: info.agregos,
    agregoPrice: 0,
    totalPrice: 0,
  }
  
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
          Precio: {stateEdit.itemPrice.toFixed(2)} {item.coin}
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
            Cantidad del producto: <span>{info.quantity}</span>
          </p>
          {stateEdit.agregoPrice !== 0 && <p>
            Precio de los agregos por cada producto: <span>{stateEdit.agregoPrice.toFixed(2)}</span>
          </p>}
          <HorizontalDivider color={"gray"} height={2}/>
        </div>
        <div className="item-options-id">
          <div className="amount-options-id">
            <div className="total-price-id">
            Total: {stateEdit.totalPrice.toFixed(2)} {item.coin}
            </div>
            <div className="amount-buttons-id">
              <button className="button-amount-id" onClick={decrementAmount}>
                {'<'}
              </button>
              <div>
                {stateEdit.amountItem}
              </div>
              <button className="button-amount-id" onClick={incrementAmount}>
                {'>'}
              </button>
            </div>
          </div>
          <div className="buy-options-id">
            <button className="btn-buy-id" onClick={addToCart}>
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