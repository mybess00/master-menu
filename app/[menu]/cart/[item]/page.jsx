'use client'

import { EditItemProvider } from "../../../../context/EditItemContext"
import ItemEdit from "../../../../components/page-edit/ItemEdit"
import Agregos from "../../../../components/page-edit/Agregos"

export default function ItemCartEditPage ({ params }) {

  const { item } = params

  return (
    <EditItemProvider>
      <ItemEdit index={item} />
      <Agregos agregos={item}/>
    </EditItemProvider>
  )
}