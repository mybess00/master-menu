'use client'

import { useSearchParams } from "next/navigation"
import fileJSON from "../../../data-menu.json"
import Item from "../../../components/Item"
import ItemOffer from "../../../components/ItemOffer"
import ItemSpent from "../../../components/ItemSpent"
import Modal from "../../../components/Modal"

export default function PageCategory ({ params }) {

  const { menu, category } = params 
  const Config = fileJSON[menu]
  const searchParams = useSearchParams()
  const item = searchParams.get('item')
  return (
    <>
    { item && (
      Config[category].map((element, index) => {
        if (element.id == item) {
          return  <Modal item={element} key={index}/>
        }
      })
    )}
    <section className="category-container">
      {Config[category].map((element) => {
        if (element.available){                      
          if (element.offer) {
            return  <ItemOffer
                      id={element.id}
                      title={element.title}
                      description={element.description}
                      image={element.image}
                      price={element.price}
                      coin={element.coin}
                      offer={element.offer}
                      baseLink={`/${menu}/${category}/?item=`}
                      asBaseLink={`/${menu}/${category}/`}
                      key={element.id}/>
          }
          return  <Item
                    id={element.id}
                    title={element.title}
                    description={element.description}
                    image={element.image}
                    price={element.price}
                    coin={element.coin}
                    baseLink={`/${menu}/${category}/?item=`}
                    asBaseLink={`/${menu}/${category}/`}
                    key={element.id}/>
        }
        return  <ItemSpent
                  id={element.id}
                  title={element.title}
                  description={element.description}
                  image={element.image}
                  key={element.id}/>
      })}
    </section>
    </>
  )
}