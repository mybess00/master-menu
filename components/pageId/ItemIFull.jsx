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

  const { order, setAmount, setItemPrice } = useContext(PageIdContext)
  const { state, dispatch } = useContext(CartContext)

  const categoryName = data["category"].find(({ id }) => id == category)
  const item = data[category].find((element) => element.id == id)

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

  const isSameOrder = (order) => {
    let filteredOrder = state.filter(element => element.item.id === order.item.id && JSON.stringify(element.info.agregos) === JSON.stringify(order.info.agregos))
    if (filteredOrder.length > 0) {
      return filteredOrder
    }
    return false
  }

  const addToCart = () => {
    const info = {
      'quantity': order.amountItem,
      'agregos': order.agregoList,
      'total': order.totalPrice,
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
      setTotalDiscount(discount*order.amountItem)
    }
  }, [order.amountItem])

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
            Precio del producto: <span>{order.itemPrice.toFixed(2)}</span>
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