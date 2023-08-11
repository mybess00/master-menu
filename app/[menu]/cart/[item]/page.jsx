'use client'

import { EditItemProvider } from "../../../../context/EditItemContext"
import ItemEdit from "../../../../components/ItemEdit"

export default function ItemCartEditPage ({ params }) {

  const { item } = params

  return (
    <EditItemProvider>
      <ItemEdit index={item} />
    </EditItemProvider>
  )
}