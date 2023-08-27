'use client'

import '../styles/Filters.css'
import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"

export default function Filters () {

  const { ConfigData } = useContext(MenuContext)

  const showCategory = () => {
    const categories = ConfigData.category.map((element, index) => {
      return  <div className='container-category'>
                <input type="checkbox" id={`input-show-category-${element.id}`} className="input-filter-category"/>
                <label className="label-filter" htmlFor={`input-show-category-${element.id}`}>
                  {element.name}
                </label>
              </div>
    })
    return categories
  }

  return (
    <section>
      <div>
        <h3>Categorías:</h3>
        <div className="container-filter-category">
          <div className='container-category'>
            <input type="checkbox" id='input-show-category-all' defaultChecked={'on'} className="input-filter-category"/>
            <label className="label-filter" htmlFor='input-show-category-all'>
              Todas
            </label>
          </div>
          {showCategory()}
        </div>
      </div>

      <div>
        <h3>Precios:</h3>
        <div>
          
        </div>
      </div>

      <div>
        <h3>Mostrar:</h3>
        <div>
          
        </div>
      </div>

      <div>
        <h3>Ordenar por:</h3>
        <div>
          
        </div>
      </div>
    </section>
  )
}