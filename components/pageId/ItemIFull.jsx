'use client'
import { useState, useEffect, useContext } from "react"
import { PageIdContext } from "../../context/PageIdContext"
import Image from 'next/image'
import HorizontalDivider from "../HorizontalDivider"
import Link from "next/link"
import { ACTION_TYPES } from "../../reducers/orderReducer"
import { useCart } from "../../hooks/useCart"

export default function ItemFull ({ data, menu, category, id }) {

  const { state, dispatch } = useContext(PageIdContext)

  const { isOnCart, isSameOrder, addItem } = useCart()
  
  const categoryName = data["category"].find(({ id }) => id == category)
  const item = data[category].find((element) => element.id == id)

  const [totalDiscount, setTotalDiscount] = useState(item.price - item.offer)
  const discount = item.price - item.offer

  const incrementAmount = () => {
    dispatch({ type: ACTION_TYPES.SET_AMOUNT, payload: state.amountItem+1})
  }

  const decrementAmount = () => {
    if (state.amountItem != 1) {
      dispatch({ type: ACTION_TYPES.SET_AMOUNT, payload: state.amountItem-1})
    }
  }

  const addToCart = () => {
    const info = {
      'quantity': state.amountItem,
      'agregos': state.agregoList,
      'total': state.totalPrice,
    }
    if (!isSameOrder({ item, info })) {
      addItem({ item, info })
      return
    }
    console.log('Esta orden ya esta en el carrito')
  }

  useEffect(() => {
    if (item.offer) {
      setTotalDiscount(discount*state.amountItem)
    }
  }, [state.amountItem])

  useEffect(() => {
    if (item.offer) {
      dispatch({ type: ACTION_TYPES.SET_ITEM_PRICE, payload: item.offer})
      return
    }
    dispatch({ type: ACTION_TYPES.SET_ITEM_PRICE, payload: item.price})
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
          Precio: {state.itemPrice.toFixed(2)} {item.coin}
        </div>
        <div className="item-description-id">
          <HorizontalDivider color={"gray"} height={2}/>
          <p>{item.description}</p>
          <HorizontalDivider color={"gray"} height={2}/>
        </div>
        <div className="item-description-id">
          <h4>Detalles del Pedido:</h4>
          <p>
            Precio del producto: <span>{state.itemPrice.toFixed(2)}</span>
          </p>
          <p>
            Cantidad del producto: <span>{state.amountItem}</span>
          </p>
          {state.agregoPrice !== 0 && <p>
            Precio de los agregos por cada producto: <span>{state.agregoPrice.toFixed(2)}</span>
          </p>}
          <HorizontalDivider color={"gray"} height={2}/>
        </div>
        <div className="item-options-id">
          <div className="amount-options-id">
            <div className="total-price-id">
            Total: {state.totalPrice.toFixed(2)} {item.coin}
            </div>
            <div className="amount-buttons-id">
              <button className="button-amount-id" onClick={decrementAmount}>
                {'<'}
              </button>
              <div>
                {state.amountItem}
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