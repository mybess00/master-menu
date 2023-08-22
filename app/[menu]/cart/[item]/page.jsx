'use client'

import "./style.css"
import { EditItemProvider } from "../../../../context/EditItemContext"
import ItemEdit from "../../../../components/page-edit/ItemEdit"
import Agregos from "../../../../components/page-edit/Agregos"

export default function ItemCartEditPage ({ params }) {

  const { item } = params

  return (
    <EditItemProvider>
      <section className="main-item-cart">
        <ItemEdit index={item} />
        <div>
          <Agregos agregos={item}/>
        </div>
      </section>
    </EditItemProvider>
  )
}