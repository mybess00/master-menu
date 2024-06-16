'use client'
import "/styles/CartButtonCounter.scss"
import { useContext } from "react"
import { CartContext } from "/context/CartContext"
import { FaCartShopping } from "react-icons/fa6"

export default function CartButtonCounter () {
  const { state } = useContext(CartContext)
  const counter = state.length
  return (
    <>
    {counter !== 0 && <div className="counter">{counter}</div>}
    <FaCartShopping/>
    </>
  )
}