'use client'

import "./style.css"
import { useContext } from "react"
import { MenuContext } from "../../../../context/MenuContext"
import ItemFull from "../../../../components/page-id/ItemIFull"
import AgregosList from "../../../../components/page-id/AgregosList"
import Suggestion from "../../../../components/page-id/Suggestion"
import { PageIdProvider } from "../../../../context/PageIdContext"

export default function PageId ({ params }) {
  
  const { ConfigData } = useContext(MenuContext)
  const { category, id } = params
  
  const item = ConfigData[category].find((element) => element.id == id)

  return (
    <section className="main-id">
      <PageIdProvider>
        <ItemFull data={ConfigData} menu={ConfigData.id} category={category} id={id} />
        <div>
          {item.agregos && <AgregosList agregos={item.agregos}/>}
          <Suggestion />
        </div>
      </PageIdProvider>
    </section>
  )
}