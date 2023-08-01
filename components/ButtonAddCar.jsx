'use client'

import fileJSON from "../data-menu.json"
import { useParams } from "next/navigation"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function ButtonAddCar ({ id, price, category }) {

  const { deleteItem, addItem, isOnCart, isSameOrder } = useContext(CartContext)
  
  const { menu } = useParams()
  const ItemsList = fileJSON[menu][category]
  const item = ItemsList.find(element => element.id === id)
  const info = {
    'quantity': 1,
    'agregos': [],
    'total': item.offer ? item.offer : item.price
  }

  const handleClick = () => {
    if (item && !isOnCart(item)) {
      addItem({item, info})
    } else if (item && isSameOrder({item, info})) {
      deleteItem(item)
    }
  }

  return (
    <button className="btn-add-car" onClick={handleClick}>
      {isOnCart(item) ? 'Añadido' : price}
    </button>
  )
}