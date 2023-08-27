'use client'

import "./style.css"
import { useContext } from "react"
import { CartContext } from "../../../../context/CartContext"
import { EditItemProvider } from "../../../../context/EditItemContext"
import ItemEdit from "../../../../components/page-edit/ItemEdit"
import AgregosList from "../../../../components/page-edit/AgregosList"

export default function ItemCartEditPage ({ params }) {

  const { state } = useContext(CartContext)
  const { item } = params

  return (
    <EditItemProvider>
      <section className="main-item-cart">
        <ItemEdit index={item} />
        <div>
          {state[item].item.agregos && <AgregosList index={item}/>}
        </div>
      </section>
    </EditItemProvider>
  )
}