'use client'
import { useState, useEffect, useContext } from "react"
import { PageIdContext } from "../../context/PageIdContext"
import { CartContext } from "../../context/CartContext"
import Image from 'next/image'
import HorizontalDivider from "../HorizontalDivider"
import Link from "next/link"
import { ACTION_TYPES } from "../../reducers/orderReducer"
import { ACTION_CART } from "../../reducers/cartReducer"

export default function ItemFull ({ data, menu, category, id }) {

  const { stateId, dispatchId } = useContext(PageIdContext)
  const { state, dispatch } = useContext(CartContext)

  const categoryName = data["category"].find(({ id }) => id == category)
  const item = data[category].find((element) => element.id == id)

  const [totalDiscount, setTotalDiscount] = useState(item.price - item.offer)
  const discount = item.price - item.offer

  const incrementAmount = () => {
    dispatchId({ type: ACTION_TYPES.SET_AMOUNT, payload: stateId.amountItem+1})
  }

  const decrementAmount = () => {
    if (stateId.amountItem != 1) {
      dispatchId({ type: ACTION_TYPES.SET_AMOUNT, payload: stateId.amountItem-1})
    }
  }

  const isSameOrder = (order) => {
    let filteredOrder = state.filter(element => element.item.id === order.item.id && JSON.stringify(element.info.agregos) === JSON.stringify(order.info.agregos))
    if (filteredOrder.length > 0) {
      return filteredOrder
    }
    return false
  }

  const addToCart = () => {
    const info = {
      'quantity': stateId.amountItem,
      'agregos': stateId.agregoList,
      'total': stateId.totalPrice,
    }
    if (isSameOrder({item, info})) {
      console.log('Misma orden')
      console.log(isSameOrder({item, info}))
    } else {
      console.log('se puede agregar')
      dispatch({ type: ACTION_CART.ADD_ITEM, payload: {item, info}})
    }
  }

  useEffect(() => {
    if (item.offer) {
      setTotalDiscount(discount*stateId.amountItem)
    }
  }, [stateId.amountItem])

  useEffect(() => {
    if (item.offer) {
      dispatchId({ type: ACTION_TYPES.SET_ITEM_PRICE, payload: item.offer})
      return
    }
    dispatchId({ type: ACTION_TYPES.SET_ITEM_PRICE, payload: item.price})
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
          Precio: {stateId.itemPrice.toFixed(2)} {item.coin}
        </div>
        <div className="item-description-id">
          <HorizontalDivider color={"gray"} height={2}/>
          <p>{item.description}</p>
          <HorizontalDivider color={"gray"} height={2}/>
        </div>
        <div className="item-description-id">
          <h4>Detalles del Pedido:</h4>
          <p>
            Precio del producto: <span>{stateId.itemPrice.toFixed(2)}</span>
          </p>
          <p>
            Cantidad del producto: <span>{stateId.amountItem}</span>
          </p>
          {stateId.agregoPrice !== 0 && <p>
            Precio de los agregos por cada producto: <span>{stateId.agregoPrice.toFixed(2)}</span>
          </p>}
          <HorizontalDivider color={"gray"} height={2}/>
        </div>
        <div className="item-options-id">
          <div className="amount-options-id">
            <div className="total-price-id">
            Total: {stateId.totalPrice.toFixed(2)} {item.coin}
            </div>
            <div className="amount-buttons-id">
              <button className="button-amount-id" onClick={decrementAmount}>
                {'<'}
              </button>
              <div>
                {stateId.amountItem}
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