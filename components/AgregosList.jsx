'use client'

import { useEffect, useState, useRef } from "react"
import { useArrState } from "../hooks/useArrState"
import { MdDelete } from "react-icons/md"

export default function AgregosList ({ agregos }) {
  
  const [totalPrice, setTotalPrice] = useState(0)
  const amount = useArrState()
  //const [amount, amount.updateValue, amount.deleteValue] = useArrState([])
  const agregosActive = useArrState()
  let agregosActiveArr = agregosActive.getArr
  //const [agregosActive, setAgregosActive, agregosActive.deleteValue, agregosActive.pushValue] = useArrState([])
  const agregoMainRef = useRef(null)
  const placeholderOption = useRef(null)

  const newAgrego = (e) => {
    const index = e.target.value
    document.querySelector(`#agrego-${index}`).disabled = true
    agregosActive.pushValue(agregos[index])
    e.target.value = 'placeholder'
    amount.updateValue(agregosActive.getArr.length, 1)
  }

  const deleteAgrego = (index, id) => {
    agregosActive.deleteValue(index)
    document.querySelector(`#agrego-${id}`).disabled = false
    amount.deleteValue(index, 0)
  }

  const addAmount = (index) => {
    amount.updateValue(index, amount.getArr[index]+1)
  }

  const removeAmount = (index) => {
    if (amount.getArr[index] !== 0) {
      amount.updateValue(index, amount.getArr[index]-1)
    }
  }

  useEffect(() => {
    let total = 0
    if (agregosActive.getLength !==0 && amount.getLength !==0) {
      amount.getArr.forEach((element, index) => {
        let item = agregosActive.getArr[index]
        let priceElement = item.price * element
        total += priceElement
      })
    }
    setTotalPrice(total)
  }, [amount.getArr])
  
  return (
    <div className="agrego-main">
      <div className="agrego-list" ref={agregoMainRef}>
        {agregosActive.getLength!== 0 && (
          agregosActiveArr.map((element, index) => {
            return  <div className="agrego-list-grid" key={index}>
                      <div key={index}>{element.name}</div>
                      <div className="text-price" >{element.price}</div>
                      <div className="agrego-item-options">
                        <button className="button-amount" onClick={() => removeAmount(index)}>-</button>
                        <div>{amount.getArr[index]}</div>
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