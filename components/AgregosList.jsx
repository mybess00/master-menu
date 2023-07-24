'use client'

import { useEffect, useState, useRef } from "react"
import { useArrState } from "../hooks/useArrState"
import HorizontalDivider from "./HorizontalDivider"

export default function AgregosList ({ agregos }) {
  
  const [amount, setAmount] = useArrState([])
  const [agregosActive, setAgregosActive] = useState([])
  const agregoMainRef = useRef(null)

  const pushValue = (value) => {
    const newArr = [...agregosActive]
    newArr.push(value)
    setAgregosActive(newArr)
  }

  const newAgrego = (e) => {
    const index = e.target.value
    document.querySelector(`#agrego-${index}`).style.display = 'none'
    pushValue(agregos[index])
  }

  useEffect(() => {
    console.log(agregosActive)
  },[agregosActive])

  return (
    <div className="agrego-main">
      <div className="agrego-list" ref={agregoMainRef}>
        {agregosActive.lenght != 0 && (
          agregosActive.map((element, index) => {
            return  <div key={index}>
                      {element.name} {element.price}
                    </div>
          })
        )}
      </div>
      <select onChange={newAgrego}>
        {agregos.map((element, index) => {
          return  <option key={index} value={index} id={`agrego-${index}`}> {element.name} ${element.price}</option>
        })}
      </select>
    </div>
  )
}