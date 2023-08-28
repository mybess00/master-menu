'use client'

import '../styles/Filters.css'
import { useContext, useRef } from "react"
import { MenuContext } from "../context/MenuContext"
import { HiOutlineSearch } from "react-icons/hi"

export default function Filters () {

  const { ConfigData } = useContext(MenuContext)
  const minPriceRef = useRef()
  const maxPriceRef = useRef()
  const showAvailable = useRef()
  const showOffer = useRef()
  const sortHigherPrice = useRef()
  const sortLowerPrice = useRef()
  const sortOffer = useRef()
  const sortUnavailable = useRef()

  const getCategoryParams = () => {
    const activeCategory = []
    const inputsCategory = document.querySelectorAll('.input-filter-category')
     inputsCategory.forEach(element => {
      if (element.checked) {
        activeCategory.push(element.value)
      }
     })
     return activeCategory
  }

  const getPrice = () => {
    const priceRank = []
    const minPrice = parseInt(minPriceRef.current.value)
    const maxPrice = parseInt(maxPriceRef.current.value)
    if (minPrice > maxPrice) {
      alert('El precio mínimo no debe ser mayor que el precio máximo')
      return false
    }
    if (isNaN(minPrice)) {
      priceRank[0] = 0
    } else {
      priceRank[0] = minPrice
    }
    if (isNaN(maxPrice)) {
      priceRank[1] = 0
    } else {
      priceRank[1] = maxPrice
    }
    return priceRank
  }

  const getShow = () => {
    if (showAvailable.current.checked) {
      return showAvailable.current.value
    }
    return showOffer.current.value
  }

  const getSort = () => {
    if (sortHigherPrice.current.checked) {
      return sortHigherPrice.current.value
    } else if (sortLowerPrice.current.checked) {
      return sortLowerPrice.current.value
    } else if (sortOffer.current.checked) {
      return sortOffer.current.value
    } else if (sortUnavailable.current.checked) {
      return sortUnavailable.current.value
    }
  }

  const getFilters = () => {
    return {
      'categories': getCategoryParams(),
      'price': getPrice(),
      'show': getShow(),
      'sort': getSort(),
    }
  }

  const showCategory = () => {
    const categories = ConfigData.category.map((element, index) => {
      return  <div className='container-category' key={index}>
                <input type="checkbox" id={`input-filter-category-${element.id}`} value={element.id} className="input-filter-category"/>
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
            <input type="checkbox" id='input-filter-category-all' value='all' defaultChecked={'on'} className="input-filter-category"/>
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
            <input type="number" id='input-price-min' name='filter-price' ref={minPriceRef} className="input-filter-price"/>
            <label className="label-price" htmlFor='input-price-min'>
              Mínimo
            </label>
          </div>
          <div className='container-price'>
            <input type="number" id='input-price-max' name='filter-price' ref={maxPriceRef} className="input-filter-price"/>
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
            <input type="radio" id='input-show-available' checked ref={showAvailable} value='available' name='filter-show' className="input-filter-show"/>
            <label className="label-show" htmlFor='input-show-available'>
              Solo disponibles
            </label>
          </div>
          <div className='container-show'>
            <input type="radio" id='input-show-offer' ref={showOffer} value='offer' name='filter-show' className="input-filter-show"/>
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
            <input type="radio" id='input-sort-higher-price' ref={sortHigherPrice} value='higher' checked name='filter-sort' className="input-filter-sort"/>
            <label className="label-sort" htmlFor='input-sort-higher-price'>
              De mayor a menor precio
            </label>
          </div>
          <div className='container-sort'>
            <input type="radio" id='input-sort-lower-price' ref={sortLowerPrice} value='lower' name='filter-sort' className="input-filter-sort"/>
            <label className="label-sort" htmlFor='input-sort-lower-price'>
              De menor a mayor precio
            </label>
          </div>
          <div className='container-sort'>
            <input type="radio" id='input-sort-offer' ref={sortOffer} value='offer' name='filter-sort' className="input-filter-sort"/>
            <label className="label-sort" htmlFor='input-sort-offer'>
              Mostrar ofertas primero
            </label>
          </div>
          <div className='container-sort'>
            <input type="radio" id='input-sort-unavailable' ref={sortUnavailable} value='unavailable' name='filter-sort' className="input-filter-sort"/>
            <label className="label-sort" htmlFor='input-sort-unavailable'>
              Mostrar no disponibles primero
            </label>
          </div>
        </div>
      </div>

      <button className='search-button' onClick={() => console.log(getFilters())}>
        <div className='search-icon'>
          <HiOutlineSearch/>
        </div>
        BUSCAR
      </button>
    </section>
  )
}