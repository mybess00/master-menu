'use client'

import "../../styles/NavBar.css"
import { useRouter, useParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function CategoryList ({ categories }) {

  const router = useRouter()
  const params = useParams()

  useEffect(() => {
    if (params.category) {
      let a = document.querySelector(`#toggle-categories-${params.category}`)
      a.checked = true
    }
  }, [params])

  const toLink = (link) => {
    router.replace(link, { scroll: true })
    const body = document.querySelector('body')
    body.style.position = ""
    body.style.overflow = ""
  }

  return (
    <div className="categories-container">
      <h3>Categorías</h3>
      <ul className="categories-list-container">
        {categories.map((element, index) => {
          return  <li onClick={() => {toLink(element.id)}} key={index} id={`li-${element.id}`}>
                    <input type="radio" name="toggle-categories" id={`toggle-categories-${element.id}`} />
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