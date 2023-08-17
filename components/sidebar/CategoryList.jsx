'use client'

import "../../styles/NavBar.css"
import { useRouter, useParams } from "next/navigation"
import { useEffect, useContext } from "react"
import { MenuContext } from "../../context/MenuContext"

export default function CategoryList ({ categories, updateInputValue }) {

  const { ConfigData } = useContext(MenuContext)
  const router = useRouter()
  const { category, id} = useParams()
  const ItemList = ConfigData[category]

  useEffect(() => {
    if (id) {
      let inputItem = document.querySelector(`#toggle-item-list-${id}`)
      inputItem.checked = true
    } else if (category) {
      let inputCategory = document.querySelector(`#toggle-categories-${category}`)
      inputCategory.checked = true
    }
  }, [category, id])

  const toLink = (link) => {
    if (category) {
      router.replace(link, { scroll: true })
    } else {
      router.push(`/${ConfigData.id}/${link}`, { scroll: true })
    }
    const sideBarInput = document.querySelector('#toggle-side-bar')
    setTimeout(() => {
      sideBarInput.checked = false
    }, 100)
    updateInputValue(false)
  }

  const categoryList = categories.map((element, index) => {
    return  <li onClick={() => {toLink(element.id)}} key={index} id={`li-${element.id}`}>
              <input type="radio" name="toggle-categories" id={`toggle-categories-${element.id}`} />
              <label htmlFor={`toggle-categories-${element.id}`}>
                {element.name}
              </label>
            </li>
  })

  return (
    <div className="categories-container">
      <h3>{id ? 'Productos' : 'Categorías'}</h3>
      <ul className="categories-list-container">
        {!id ? categoryList.map(element => element) : (() => {
          return ItemList.map((element, index) => {
            return  <li onClick={() => {toLink(element.id)}} key={index} id={`li-${element.id}`}>
                      <input type="radio" name="toggle-item-list" id={`toggle-item-list-${element.id}`} />
                      <label htmlFor={`toggle-item-list-${element.id}`}>
                        {element.title}
                      </label>
                    </li>
          })
        })()}
      </ul>
    </div>
  )
}