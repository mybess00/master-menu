'use client'

import './style.css'
import { useContext, useState } from "react"
import { useFilters } from '../../../hooks/useFilters'
import { MenuContext } from "../../../context/MenuContext"
import Item from '../../../components/Item'
import ItemOffer from '../../../components/ItemOffer'

export default function PageFilter () {

  const { ConfigData } = useContext(MenuContext)
  const { filters, updateFilter } = useFilters()
  const deleteFilter = (e) => {
    const div = e.target
    const dataKey = div.getAttribute('data-key')
    if (dataKey === 'categories') {
      const categories = []
      ConfigData.category.forEach(element => {
        categories.push(element.id)
      })
      updateFilter(dataKey, categories.join(','))
    } else if (dataKey === 'price') {
      updateFilter(dataKey, '0,0')
    } else if (dataKey === 'show') {
      updateFilter(dataKey, 'available')
    } else if (dataKey === 'sort') {
      updateFilter(dataKey, 'higher')
    } else if (dataKey === 'name'){
      updateFilter(dataKey, '')
    }
    div.style.display = 'none'
  }

  const getItems = () => {
    const items = []
    filters.categories.split(',').forEach(element => {
      items.push(ConfigData[element])
    })
    if (filters.name) {
      const oldItems = items.flat()
      items.length = 0
      items.push(oldItems.filter(element => element.title.toLowerCase().includes(filters.name.toLowerCase())))
    }
    if (filters.price && items.flat().length !== 0) {
      const price = filters.price.split(',').map(element => parseInt(element))
      const oldItems = items.flat()
      items.length = 0
      oldItems.forEach(element => {
        let itemPrice = element.offer ? element.offer : element.price
        if (itemPrice >= price[0]) {
          if (price[1] !== 0 && itemPrice <= price[1]) {
            items.push(element)
          } else if (price[1] === 0) {
            items.push(element)
          }
        }
      })
    }
    if (items.flat().length !== 0) {
      const oldItems = items.flat()
      items.length = 0
      if (filters.show === 'available') {
        items.push(oldItems.filter(element => element.available))
      } else if (filters.show === 'offer') {
        items.push(oldItems.filter(element => element.offer && element.available))
      }
    }
    if (items.flat().length > 1) {
      const oldItems = items.flat()
      items.length = 0
      if (filters.sort === 'offer') {
        items.push(oldItems.sort((a, b) => {
          if (a.offer && b.offer) {
            return a.offer - b.offer
          } else if (a.offer) {
            return -1
          } else if (b.offer) {
            return 1
          } else {
            return a.price - b.price
          }
        }))
      } else {
        items.push(oldItems.sort((a, b) => {
          let aPrice = a.offer ? a.offer : a.price
          let bPrice = b.offer ? b.offer : b.price
          if (filters.sort === 'higher') {
            return bPrice - aPrice
          } else if (filters.sort === 'lower') {
            return aPrice - bPrice
          }
        }))
      }
    }
    return items.flat()
  }

  const getFilterTitle = (key) => {
    if (key === 'categories') {
      const id = filters[key].split(',')
      const titles = id.map(element => {
        let categoryTitle = ''
        ConfigData.category.forEach(category => {
          if (category.id === element) {
            categoryTitle = category.name
          }
        })
        return categoryTitle
      })
      return `Categorías: ${titles.join(', ')}`
    } else if (key === 'price') {
      const price = filters[key].split(',')
      return `Precio: min:${price[0]} ${price[1] !== '0' ? `- max:${price[1]}` : ''}`
    } else if (key === 'name') {
      return `Nombre: ${filters[key]}`
    } else if (key === 'show') {
      const title = () => {
        if (filters[key] === 'available') {
          return 'Mostrar solo disponibles'
        } else if (filters[key] === 'offer') {
          return 'Mostrar solo ofertas'
        }
      }
      return title()
    } else if (key == 'sort') {
      const sortType = filters[key]
      const title = () => {
        if (sortType === 'higher') {
          return 'Ordenar: De mayor a menor precio'
        } else if (sortType === 'lower') {
          return 'Ordenar: De menor a mayor precio'
        } else if (sortType === 'offer') {
          return 'Ordenar: Ofertas primero'
        }
      }
      return title()
    }
  }
  return (
    <section>
      <div className='container-active-filter'>
        {Object.keys(filters).map(element => {
          if (filters[element] == '' || filters[element] == '0,0') {
            return <></>
          }
          return  <div className="active-filter" data-key={element} data-value={filters[element]} onClick={deleteFilter} key={element}>
                    <strong>X</strong> {getFilterTitle(element)}
                  </div>
        })}
      </div>
      {getItems().length !== 0 ? <h1>Resultados</h1> : <h1>No hay resultados</h1>}
      <div className='section-container-filter'>
        {
          getItems().map(element => {
            if (element.offer) {
              return <ItemOffer 
                item={element}
                baseLink={`/${ConfigData.id}/${element.category}/`}
                category={element.category}
                key={element.id} />
            } else {
              return <Item 
                item={element}
                baseLink={`/${ConfigData.id}/${element.category}/`}
                category={element.category}
                key={element.id} />
            }
          })
          }
        </div>
    </section>
  )
}