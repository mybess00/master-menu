'use client'

import "./style.css"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import ItemCart from "../../../components/ItemCart"
import HorizontalDivider from "../../../components/HorizontalDivider"

export default function PageCart () {

  const { state, dispatch } = useContext(CartContext)

  return (
    <div className="container-items-cart">
      {state.map((element, index) => {
        return  <>
                  <ItemCart item={element.item} info={element.info} index={index} key={index}/>
                  <HorizontalDivider height={1} color='gray'/>
                </>
      })}
    </div>
  )
}