'use client'

import { useEffect, useState, useRef } from "react"
import { useArrState } from "../hooks/useArrState"
import { MdDelete } from "react-icons/md"

export default function AgregosList ({ agregos }) {
  
  const [totalPrice, setTotalPrice] = useState(0)
  const [amount, setAmount, deleteAmount] = useArrState([])
  const [agregosActive, setAgregosActive, deleteAgregosActive, pushAgregosActive] = useArrState([])
  const agregoMainRef = useRef(null)
  const placeholderOption = useRef(null)

  const newAgrego = (e) => {
    const index = e.target.value
    document.querySelector(`#agrego-${index}`).disabled = true
    pushAgregosActive(agregos[index])
    e.target.value = 'placeholder'
    setAmount(agregosActive.length, 1)
  }

  const deleteAgrego = (index, id) => {
    deleteAgregosActive(index)
    document.querySelector(`#agrego-${id}`).disabled = false
    deleteAmount(index, 0)
  }

  const addAmount = (index) => {
    setAmount(index, amount[index]+1)
  }

  const removeAmount = (index) => {
    if (amount[index] !== 0) {
      setAmount(index, amount[index]-1)
    }
  }

  useEffect(() => {
    let total = 0
    if (agregosActive.length !==0 && amount.length !==0) {
      amount.forEach((element, index) => {
        let item = agregosActive[index]
        let priceElement = item.price * element
        total += priceElement
      })
    }
    setTotalPrice(total)
  }, [amount])

  return (
    <div className="agrego-main">
      <div className="agrego-list" ref={agregoMainRef}>
        {agregosActive.length !== 0 && (
          agregosActive.map((element, index) => {
            return  <div className="agrego-list-grid">
                      <div key={index}>{element.name}</div>
                      <div className="text-price" >{element.price}</div>
                      <div className="agrego-item-options">
                        <button className="button-amount" onClick={() => removeAmount(index)}>-</button>
                        <div>{amount[index]}</div>
                        <button className="button-amount" onClick={() => addAmount(index)}>+</button>
                        <button className="button-delete" onClick={() => deleteAgrego(index, element.id)}>
                          <MdDelete/>
                        </button>
                      </div>
                    </div>
            
          })
        )}
      </div>
      <select className="add-agrego" onChange={newAgrego} name="agrego-select" id="agrego-select">
        <option value='placeholder' disabled selected ref={placeholderOption}>Toca para añadir un agrego</option>
        {agregos.map((element, index) => {
          return  <option key={index} value={index} id={`agrego-${element.id}`}> {element.name} ${element.price}</option>
        })}
      </select>
      {totalPrice}
    </div>
  )
}