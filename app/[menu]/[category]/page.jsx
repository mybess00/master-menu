'use client'

import "./style.css"
import { useContext } from "react"
import { useSearchParams } from "next/navigation"
import { MenuContext } from "../../../context/MenuContext"
import Item from "../../../components/Item"
import ItemOffer from "../../../components/ItemOffer"
import ItemSpent from "../../../components/ItemSpent"
import Modal from "../../../components/Modal"

export default function PageCategory ({ params }) {

  const { ConfigData } = useContext(MenuContext)
  const { category } = params 
  const searchParams = useSearchParams()
  const item = searchParams.get('item')
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
      {ConfigData[category].map((item) => {
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