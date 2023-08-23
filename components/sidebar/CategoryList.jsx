'use client'

import "../../styles/NavBar.css"
import { useRouter, useParams } from "next/navigation"
import { useEffect, useContext } from "react"
import { MenuContext } from "../../context/MenuContext"

export default function CategoryList ({ updateInputValue, identifier }) {

  const { ConfigData } = useContext(MenuContext)
  const router = useRouter()
  const { category, id} = useParams()
  const ItemList = ConfigData[category]

  useEffect(() => {
    if (id) {
      const inputItem = document.querySelectorAll(`#toggle-item-list-${identifier}-${id}`)
      inputItem.forEach(element => element.checked = true)
    } else if (category) {
      const inputCategory = document.querySelectorAll(`#toggle-categories-${identifier}-${category}`)
      inputCategory.forEach(element => element.checked = true)
    } else {
      const inputs = document.querySelectorAll(`input[name="toggle-categories-${identifier}"]`)
      inputs.forEach(element => element.checked = false)
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

  const categoryList = ConfigData.category.map((element, index) => {
    return  <li onClick={() => {toLink(element.id)}} key={index} id={`li-${identifier}-${element.id}`}>
              <input type="radio" className="input-category" name={`toggle-categories-${identifier}`} id={`toggle-categories-${identifier}-${element.id}`} />
              <label htmlFor={`toggle-categories-${identifier}-${element.id}`}>
                {element.name}
              </label>
            </li>
  })

  const items = () => {
    return ItemList.map((element, index) => {
      return  <li onClick={() => {toLink(element.id)}} key={index} id={`li-${identifier}-${element.id}`}>
                <input type="radio" className="input-item" name={`toggle-item-list-${identifier}`} id={`toggle-item-list-${identifier}-${element.id}`} />
                <label htmlFor={`toggle-item-list-${identifier}-${element.id}`}>
                  {element.title}
                </label>
              </li>
    })  
  }

  return (
    <div className="categories-container">
      <h3>{id ? 'Productos' : 'Categorías'}</h3>
      <ul className="categories-list-container">
        {!id ? categoryList.map(element => element) : items().map(element => element)}
      </ul>
    </div>
  )
}