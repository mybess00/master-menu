'use client'

import "../../../../styles/IdPage.css"

import { useContext } from "react"
import { MenuContext } from "../../../../context/MenuContext"
import ItemFull from "../../../../components/page-id/ItemIFull"
import Agregos from "../../../../components/page-id/Agregos"
import Suggestion from "../../../../components/page-id/Suggestion"
import { PageIdProvider } from "../../../../context/PageIdContext"

export default function PageId ({ params }) {
  
  const { ConfigData } = useContext(MenuContext)
  const { menu, category, id } = params
  
  const item = ConfigData[category].find((element) => element.id == id)

  return (
    <section className="main-id">
      <PageIdProvider>
        <ItemFull data={ConfigData} menu={ConfigData.id} category={category} id={id} />
        {item.agregos && <Agregos agregos={item.agregos}/>}
      </PageIdProvider>
      <Suggestion />
    </section>
  )
}