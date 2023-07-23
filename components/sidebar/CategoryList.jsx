'use client'

import "../../styles/NavBar.css"
import fileJSON from "../../data-menu.json"
import { useRouter, useParams } from "next/navigation"
import { useEffect } from "react"

export default function CategoryList ({ categories, updateInputValue }) {

  const router = useRouter()
  const params = useParams()
  const ItemList = fileJSON[params.menu][params.category]

  useEffect(() => {
    if (params.id) {
      let inputItem = document.querySelector(`#toggle-item-list-${params.id}`)
      inputItem.checked = true
    } else if (params.category) {
      let inputCategory = document.querySelector(`#toggle-categories-${params.category}`)
      inputCategory.checked = true
    }
  }, [params])

  const toLink = (link) => {
    router.replace(link, { scroll: true })
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
      <h3>{params.id ? 'Productos' : 'Categorías'}</h3>
      <ul className="categories-list-container">
        {!params.id ? categoryList.map(element => element) : (() => {
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