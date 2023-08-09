'use client'

import fileJSON from "../data-menu.json"
import { useParams } from "next/navigation"
import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import { ACTION_CART } from "../reducers/cartReducer"

export default function ButtonAddCar ({ id, price, category }) {

  const { state, dispatch } = useContext(CartContext)

  const { menu } = useParams()
  const ItemsList = fileJSON[menu][category]
  const item = ItemsList.find(element => element.id === id)
  const info = {
    'quantity': 1,
    'agregos': [],
    'price': price,
    'total': item.offer ? item.offer : item.price
  }

  const checkItem = (item) => {
    return state.some(element => element.item.id == item.id)
  }

  let isOnCart = checkItem(item)

  const handleClick = () => {
    if (item && !isOnCart) {
      dispatch({ type: ACTION_CART.ADD_ITEM, payload: {item, info} })
    } else if (item && isOnCart) {
      dispatch({ type: ACTION_CART.DELETE_ITEM, payload: {item, info} })
    }
  }

  useEffect(() => {
    isOnCart = checkItem(item)
  }, [state])

  return (
    <button className="btn-add-car" onClick={handleClick}>
      {isOnCart ? 'Añadido' : price}
    </button>
  )
}