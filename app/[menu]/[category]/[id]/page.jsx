'use client'

import "../../../../styles/IdPage.css"
import filseJSON from '../../../../data-menu.json'
import ItemFull from "../../../../components/pageId/ItemIFull"
import Agregos from "../../../../components/pageId/Agregos"
import Suggestion from "../../../../components/pageId/Suggestion"
import BottomBar from "../../../../components/pageId/BottomBar"
import { PageIdProvider } from "../../../../context/PageIdContext"

export default function PageId ({ params }) {
  
  const { menu, category, id } = params
  const Config = filseJSON[menu]
  const item = Config[category].find((element) => element.id == id)

  return (
    <section className="main-id">
      <PageIdProvider>
        <ItemFull data={Config} menu={menu} category={category} id={id} />
        {item.agregos && <Agregos agregos={item.agregos}/>}
        <BottomBar />
      </PageIdProvider>
      <Suggestion />
    </section>
  )
}