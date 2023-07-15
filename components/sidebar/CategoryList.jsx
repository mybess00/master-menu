'use client'

import "../../styles/NavBar.css"
import { useRouter, useParams } from "next/navigation"

export default function CategoryList ({ categories }) {

  const router = useRouter()
  const params = useParams()

  const toLink = (link) => {
    if (!params.category) {
      router.push(`/${params.menu}/${link}`)
      return false
    }
    router.replace(link)
    const body = document.querySelector('body')
    body.style.position = ""
    body.style.overflow = ""
  }

  return (
    <div className="categories-container">
      <h3>Categorías</h3>
      <ul className="categories-list-container">
        {categories.map((element, index) => {
          return  <li onClick={() => {toLink(element.id)}} key={index}>
                    <input type="radio" name="toggle-categories" id={`toggle-categories-${element.id}`}/>
                    <label htmlFor={`toggle-categories-${element.id}`}>
                      {element.name}
                    </label>
                  </li>
        })
        }
      </ul>
    </div>
  )
}