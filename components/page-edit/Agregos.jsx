'use client'

import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import VerticalDivider from "../VerticalDivider"
import AgregosList from "./AgregosList"

export default function Agregos ({ agregos }) {

  const { state } = useContext(CartContext)

  if (!state[agregos].item.agregos) {
    return <></>
  }

  return (
    <div className="main-container-agregos">
      <div className="title-agregos">
        <VerticalDivider color={"green"} width={4}/>
        Agregos ➕
      </div>
      <AgregosList index={agregos}/>
    </div>
  )
}