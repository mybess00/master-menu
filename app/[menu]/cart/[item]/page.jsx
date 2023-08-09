'use client'

import { useContext } from "react"
import { CartContext } from "../../../../context/CartContext"
import { EditProvider } from "../../../../context/EditContext"


export default function ItemCartEditPage ({ params }) {

  const { item } = params

  return (
    <EditProvider>
      
    </EditProvider>
  )
}