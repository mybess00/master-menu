'use client'

import { useContext, useEffect, useRef } from "react"
import { MenuContext } from "../context/MenuContext"
import { CartContext } from "../context/CartContext"
import { ACTION_CART } from "../reducers/cartReducer"
import { BiCartAdd } from "react-icons/bi"
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs"

export default function ButtonAddCar ({ id, price, category }) {

  const { state, dispatch } = useContext(CartContext)
  const btnRef = useRef()
  const { ConfigData } = useContext(MenuContext)
  const ItemsList = ConfigData[category]
  const item = ItemsList.find(element => element.id === id)
  const info = {
    'quantity': 1,
    'agregos': [],
    'agregosPrice': 0,
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
    if (isOnCart) {
      btnRef.current.style.backgroundColor = '#0b4e09'
      btnRef.current.style.color = 'white'
    } else {
      btnRef.current.style = 'none'
    }
  }, [state])

  if ( isOnCart) {
    return (
      <button className="btn-add-car" onClick={handleClick} ref={btnRef}>
        <BsFillCartCheckFill />
      </button>
    )
  }
  return (
    <button className="btn-add-car" onClick={handleClick} ref={btnRef}>
      <BiCartAdd />
      AÑADIR
    </button>
  )
}