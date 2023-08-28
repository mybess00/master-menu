'use client'

import '../styles/Filters.css'
import { useContext, useRef, useState, useEffect } from "react"
import { MenuContext } from "../context/MenuContext"
import ReactModal from 'react-modal'
import { HiOutlineSearch } from "react-icons/hi"

export default function Filters () {

  const { ConfigData, modalFilterOpen, setModalFilterOpen } = useContext(MenuContext)
  const [isMobile, setIsMobile] = useState(true)
  const nameInputRef = useRef()
  const allCategoryRef = useRef()
  const minPriceRef = useRef()
  const maxPriceRef = useRef()
  const showAvailableRef = useRef()
  const showOfferRef = useRef()
  const sortHigherPriceRef = useRef()
  const sortLowerPriceRef = useRef()
  const sortOfferRef = useRef()
  const sortUnavailableRef = useRef()

  const handleClose = () => {
    if (isMobile) {
      const modal = document.querySelector('.modal-filter-mobile')
      console.log(modal)
      modal.style.transform = 'translateY(105%)'
      setTimeout(() => {
        setModalFilterOpen(false)
      }, 210)
      return
    }
    setModalFilterOpen(false)
  }

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleAllCategoryInput = () => {
    const inputsCategory = document.querySelectorAll('.input-filter-category')
    if (allCategoryRef.current.checked && Array.from(inputsCategory).some(element => element.checked === true)) {
      inputsCategory.forEach(element => element.checked = false)
    } else if (!allCategoryRef.current.checked && !Array.from(inputsCategory).some(element => element.checked === true)) {
      allCategoryRef.current.checked = true
    }
  }

  const handleCategoryInput = () => {
    const inputsCategory = document.querySelectorAll('.input-filter-category')
    if (allCategoryRef.current.checked && Array.from(inputsCategory).some(element => element.checked === true)) {
      allCategoryRef.current.checked = false
    } else if (!allCategoryRef.current.checked && !Array.from(inputsCategory).some(element => element.checked === true)) {
      allCategoryRef.current.checked = true
    }
  }

  const getName = () => nameInputRef.current.value

  const getCategoryParams = () => {
    const activeCategory = []
    const inputsCategory = document.querySelectorAll('.input-filter-category')
    if (allCategoryRef.current.checked) {
      activeCategory.push(allCategoryRef.current.value)
    }
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
    if (minPrice > maxPrice && maxPrice !== 0) {
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
    if (showAvailableRef.current.checked) {
      return showAvailableRef.current.value
    }
    return showOfferRef.current.value
  }

  const getSort = () => {
    if (sortHigherPriceRef.current.checked) {
      return sortHigherPriceRef.current.value
    } else if (sortLowerPriceRef.current.checked) {
      return sortLowerPriceRef.current.value
    } else if (sortOfferRef.current.checked) {
      return sortOfferRef.current.value
    } else if (sortUnavailableRef.current.checked) {
      return sortUnavailableRef.current.value
    }
  }

  const getFilters = () => {
    return {
      'name': getName(),
      'categories': getCategoryParams(),
      'price': getPrice(),
      'show': getShow(),
      'sort': getSort(),
    }
  }

  const handleSearchName = () => {
    
  }

  const showCategory = () => {
    const categories = ConfigData.category.map((element, index) => {
      return  <div className='container-category' key={index}>
                <input type="checkbox" id={`input-filter-category-${element.id}`} value={element.id} onChange={handleCategoryInput} className="input-filter-category"/>
                <label className="label-filter" htmlFor={`input-filter-category-${element.id}`}>
                  {element.name}
                </label>
              </div>
    })
    return categories
  }

  useEffect(() => {
    if (sortHigherPriceRef.current && showAvailableRef.current) {
      sortHigherPriceRef.current.checked = true
      showAvailableRef.current.checked = true
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  },[])

  return (
    <ReactModal isOpen={modalFilterOpen}  role="dialog" className={`${isMobile ? 'modal-filter-mobile' : 'modal-filter'}`} overlayClassName="overlay-modal-filter" onRequestClose={handleClose}>
      <section className='section-filter'>
        <div className='main-container-filter-name'>
          <h3>Buscar por nombre:</h3>
          <div className='container-filter-name'>
            <input type='text' id='input-filter-name' placeholder='Introduce el nombre' ref={nameInputRef} className='input-filter-name'/>
            <button className='button-name'>
              <HiOutlineSearch />
            </button>
          </div>
        </div>

        <div className='main-container-filter-category'>
          <h3>Categorías:</h3>
          <div className="container-filter-category">
            <div className='container-category'>
              <input type="checkbox" id='input-filter-category-all' value='all' defaultChecked={'on'} ref={allCategoryRef} onChange={handleAllCategoryInput} className="input-filter-category-all"/>
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
              <input type="radio" id='input-show-available' defaultChecked={'on'} ref={showAvailableRef} value='available' name='filter-show' className="input-filter-show"/>
              <label className="label-show" htmlFor='input-show-available'>
                Solo disponibles
              </label>
            </div>
            <div className='container-show'>
              <input type="radio" id='input-show-offer' ref={showOfferRef} value='offer' name='filter-show' className="input-filter-show"/>
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
              <input type="radio" id='input-sort-higher-price' ref={sortHigherPriceRef} value='higher' defaultChecked name='filter-sort' className="input-filter-sort"/>
              <label className="label-sort" htmlFor='input-sort-higher-price'>
                De mayor a menor precio
              </label>
            </div>
            <div className='container-sort'>
              <input type="radio" id='input-sort-lower-price' ref={sortLowerPriceRef} value='lower' name='filter-sort' className="input-filter-sort"/>
              <label className="label-sort" htmlFor='input-sort-lower-price'>
                De menor a mayor precio
              </label>
            </div>
            <div className='container-sort'>
              <input type="radio" id='input-sort-offer' ref={sortOfferRef} value='offer' name='filter-sort' className="input-filter-sort"/>
              <label className="label-sort" htmlFor='input-sort-offer'>
                Mostrar ofertas primero
              </label>
            </div>
            <div className='container-sort'>
              <input type="radio" id='input-sort-unavailable' ref={sortUnavailableRef} value='unavailable' name='filter-sort' className="input-filter-sort"/>
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
    </ReactModal>
  )
}