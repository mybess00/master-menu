'use client'

import { useEffect, useState, useRef } from "react"
import { useArrState } from "../hooks/useArrState"
import { FaDeleteLeft } from "react-icons/fa6"

export default function AgregosList ({ agregos }) {
  
  const [totalPrice, setTotalPrice] = useState(0)
  const [price, setPrice, deletePrice] = useArrState([])
  const [amount, setAmount, deleteAmount] = useArrState([])
  const [agregosActive, setAgregosActive, deleteAgregosActive, pushAgregosActive] = useArrState([])
  const agregoMainRef = useRef(null)
  const placeholderOption = useRef(null)

  const setAggPrice = (index) => {
    const priceAgg = agregos[index].price
    const amountAgg = amount[index]
    setPrice(index, priceAgg*amountAgg)
  }

  const newAgrego = (e) => {
    const index = e.target.value
    document.querySelector(`#agrego-${index}`).disabled = true
    pushAgregosActive(agregos[index])
    e.target.value = 'placeholder'
    setAmount(agregosActive.length, 1)
    const priceAgg = agregos[index].price
    setPrice(agregosActive.length, priceAgg)
  }

  const deleteAgrego = (index, id) => {
    deleteAgregosActive(index)
    document.querySelector(`#agrego-${id}`).disabled = false
    deleteAmount(index, 0)
    deletePrice(index, 0)
  }

  const addAmount = (index) => {
    setAmount(index, amount[index]+1)
  //  setAggPrice(index)
  }

  const removeAmount = (index) => {
    if (amount[index] !== 0) {
      setAmount(index, amount[index]-1)
    //  setAggPrice(index)
    }
  }

  useEffect(() => {
    agregosActive.map((element, index) => {
      setPrice(index, element.price*amount[index])
    })
    console.log(amount)
    console.log(price)
  },[amount])

  return (
    <div className="agrego-main">
      <div className="agrego-list" ref={agregoMainRef}>
        {agregosActive.lenght != 0 && (
          agregosActive.map((element, index) => {
            return  <>
                      <div key={index}>{element.name}</div>
                      <div>{element.price}</div>
                      <div className="agrego-item-options">
                        <button className="button-amount" onClick={() => removeAmount(index)}>-</button>
                        <div>{amount[index]}</div>
                        <button className="button-amount" onClick={() => addAmount(index)}>+</button>
                        <button className="button-delete" onClick={() => deleteAgrego(index, element.id)}>
                          <FaDeleteLeft/>
                        </button>
                      </div>
                    </>
            
          })
        )}
      </div>
      <select className="add-agrego" onChange={newAgrego} name="agrego-select" id="agrego-select">
        <option value='placeholder' disabled selected ref={placeholderOption}>Toca para añadir un agrego</option>
        {agregos.map((element, index) => {
          return  <option key={index} value={index} id={`agrego-${element.id}`}> {element.name} ${element.price}</option>
        })}
      </select>
    </div>
  )
}