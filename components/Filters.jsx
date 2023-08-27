'use client'

import '../styles/Filters.css'
import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"

export default function Filters () {

  const { ConfigData } = useContext(MenuContext)

  const showCategory = () => {
    const categories = ConfigData.category.map((element, index) => {
      return  <div className='container-category' key={index}>
                <input type="checkbox" id={`input-filter-category-${element.id}`} className="input-filter-category"/>
                <label className="label-filter" htmlFor={`input-filter-category-${element.id}`}>
                  {element.name}
                </label>
              </div>
    })
    return categories
  }

  return (
    <section className='section-filter'>
      <div className='main-container-filter-category'>
        <h3>Categorías:</h3>
        <div className="container-filter-category">
          <div className='container-category'>
            <input type="checkbox" id='input-filter-category-all' defaultChecked={'on'} className="input-filter-category"/>
            <label className="label-filter" htmlFor='input-filter-category-all'>
              Todas
            </label>
          </div>
          {showCategory()}
        </div>
      </div>

      <div className='main-container-filter-price'>
        <h3>Precios:</h3>
        <div className='container-filter-price'>
          <div className='container-price'>
            <input type="number" id='input-price-min' name='filter-price' className="input-filter-price"/>
            <label className="label-price" htmlFor='input-price-min'>
              Mínimo
            </label>
          </div>
          <div className='container-price'>
            <input type="number" id='input-price-max' name='filter-price' className="input-filter-price"/>
            <label className="label-price" htmlFor='input-price-max'>
              Máximo
            </label>
          </div>
        </div>
      </div>

      <div className='main-container-filter-show'>
        <h3>Mostrar:</h3>
        <div className='container-filter-show'>
          <div className='container-show'>
            <input type="radio" id='input-show-available' checked name='filter-show' className="input-filter-show"/>
            <label className="label-show" htmlFor='input-show-available'>
              Solo disponibles
            </label>
          </div>
          <div className='container-show'>
            <input type="radio" id='input-show-offer' name='filter-show' className="input-filter-show"/>
            <label className="label-show" htmlFor='input-show-offer'>
              Solo ofertas
            </label>
          </div>
        </div>
      </div>

      <div className='main-container-filter-sort'>
        <h3>Ordenar por:</h3>
        <div className='container-filter-sort'>
          <div className='container-sort'>
            <input type="radio" id='input-sort-higher-price' checked name='filter-sort' className="input-filter-sort"/>
            <label className="label-sort" htmlFor='input-sort-higher-price'>
              De mayor a menor precio
            </label>
          </div>
          <div className='container-sort'>
            <input type="radio" id='input-sort-lower-price' checked name='filter-sort' className="input-filter-sort"/>
            <label className="label-sort" htmlFor='input-sort-lower-price'>
              De menor a mayor precio
            </label>
          </div>
          <div className='container-sort'>
            <input type="radio" id='input-sort-offer' checked name='filter-sort' className="input-filter-sort"/>
            <label className="label-sort" htmlFor='input-sort-offer'>
              Mostrar ofertas primero
            </label>
          </div>
          <div className='container-sort'>
            <input type="radio" id='input-sort-unavailable' checked name='filter-sort' className="input-filter-sort"/>
            <label className="label-sort" htmlFor='input-sort-unavailable'>
              Mostrar no disponibles primero
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}