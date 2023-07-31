'use client'

import { useSearchParams } from "next/navigation"
import fileJSON from "../../../data-menu.json"
import Item from "../../../components/Item"
import ItemOffer from "../../../components/ItemOffer"
import ItemSpent from "../../../components/ItemSpent"
import Modal from "../../../components/Modal"
import { CartProvider } from "../../../context/CartContext"

export default function PageCategory ({ params }) {

  const { menu, category } = params 
  const Config = fileJSON[menu]
  const searchParams = useSearchParams()
  const item = searchParams.get('item')
  return (
    <CartProvider>
    { item && (
      Config[category].map((element, index) => {
        if (element.id == item) {
          return  <Modal item={element} key={index}/>
        }
      })
    )}
    <section className="category-container">
      {Config[category].map((item) => {
        if (item.available){                      
          if (item.offer) {
            return  <ItemOffer
                      item={item}
                      baseLink={`/${menu}/${category}/?item=`}
                      category={category}
                      key={item.id}/>
          }
          return  <Item
                    item={item}
                    baseLink={`/${menu}/${category}/?item=`}
                    category={category}
                    key={item.id}/>
        }
        return  <ItemSpent
                  item={item}
                  key={item.id}/>
      })}
    </section>
    </CartProvider>
  )
}