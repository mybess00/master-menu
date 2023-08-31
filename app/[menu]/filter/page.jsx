'use client'

import './style.css'
import { useContext, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { MenuContext } from "../../../context/MenuContext"
import Item from '../../../components/Item'
import ItemOffer from '../../../components/ItemOffer'

export default function PageFilter () {

  const objParams = {}
  const searchParams = useSearchParams()
  searchParams.forEach((value, key) => {
    objParams[key] = value
  })
  const [params, setParams] = useState(objParams)
  const { ConfigData } = useContext(MenuContext)

  const deleteFilter = (e) => {
    const div = e.target
    const dataKey = div.getAttribute('data-key')
    const dataValue = div.getAttribute('data-value')
    if (dataKey !== 'categories') {
      objParams[dataKey] = false
      div.style.display = 'none'
    } else {
      objParams[dataKey] = 'all'
    }
    setParams(prevState => ({...objParams}))
  }

  useEffect(() => {
    console.log(params)
  }, [params])


  const getItems = () => {
    const items = []
    params.categories.split(',').forEach(element => {
      items.push(ConfigData[element])
    })
    if (params.name) {
      const oldItems = items.flat()
      items.length = 0
      items.push(oldItems.filter(element => element.title.toLowerCase().includes(params.name.toLowerCase())))
    }
    if (params.price && items.flat().length !== 0) {
      const price = params.price.split(',').map(element => parseInt(element))
      const oldItems = items.flat()
      items.length = 0
      oldItems.forEach(element => {
        console.log(element)
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
      if (params.show === 'available') {
        items.push(oldItems.filter(element => element.available))
      } else if (params.show === 'offer') {
        items.push(oldItems.filter(element => element.offer && element.available))
      }
    }
    if (items.flat().length > 1) {
      const oldItems = items.flat()
      items.length = 0
      if (params.sort === 'offer') {
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
          if (params.sort === 'higher') {
            return bPrice - aPrice
          } else if (params.sort === 'lower') {
            return aPrice - bPrice
          }
        }))
      }
    }
    return items.flat()
  }

  return (
    <>
    <div className='container-active-filter'>
      {Object.keys(params).map(element => {
        return  <div className="active-filter" data-key={element} data-value={params[element]} onClick={deleteFilter} key={element}>
                  X {params[element]}
                </div>
      })}
    </div>
    <section className='section-container-filter'>
      {getItems().map(element => {
        if (element.offer) {
          return <ItemOffer 
            item={element}
            baseLink={`/${ConfigData.id}/${element.category}/?item=`}
            category={element.category}
            key={element.id} />
        } else {
          return <Item 
            item={element}
            baseLink={`/${ConfigData.id}/${element.category}/?item=`}
            category={element.category}
            key={element.id} />
        }
      })}
    </section>
    </>
  )
}