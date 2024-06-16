'use client'

import "./style.scss"
import { useContext } from "react"
import { useSearchParams } from "next/navigation"
import { MenuContext } from "context/MenuContext"
import Item from "components/items/Item"
import ItemOffer from "components/items/ItemOffer"
import ItemSpent from "components/items/ItemSpent"
import Modal from "components/Modal"

export default function PageCategory ({ params }) {

  const { ConfigData } = useContext(MenuContext)
  const { category } = params 
  const searchParams = useSearchParams()
  const item = searchParams.get('item')

  const getItems = (arr) => {
    const items = arr.filter(element => element.available && !element.offer)
    const offerItems = arr.filter(element => element.available && element.offer)
    const noAvailableItems = arr.filter(element => !element.available)
    const newArr = [...offerItems, ...items, ...noAvailableItems]
    return newArr
  }

  return (
    <>
    { item && (
      ConfigData[category].map((element, index) => {
        if (element.id == item) {
          return  <Modal item={element} key={index}/>
        }
      })
    ) }
    <section className="section-container">
      {getItems(ConfigData[category]).map((item) => {
        if (item.available){                      
          if (item.offer) {
            return  <ItemOffer
                      item={item}
                      baseLink={`/${ConfigData.id}/${category}/?item=`}
                      category={category}
                      key={item.id}/>
          }
          return  <Item
                    item={item}
                    baseLink={`/${ConfigData.id}/${category}/?item=`}
                    category={category}
                    key={item.id}/>
        }
        return  <ItemSpent
                  item={item}
                  key={item.id}/>
      })}
    </section>
    </>
  )
}