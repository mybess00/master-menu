'use client'

import "styles/Agregos.scss"
import { useContext, useRef, useEffect } from "react"
import { useArrState } from "hooks/useArrState"
import { EditItemContext } from "context/EditItemContext"
import { CartContext } from "context/CartContext"
import VerticalDivider from "/components/VerticalDivider"
import { MdDelete } from "react-icons/md"

export default function AgregosList ({ index }) {

  const { setAgregoList } = useContext(EditItemContext)
  const { state } = useContext(CartContext)
  const agregos = state[index].item.agregos
  let newAmount = []
  if (state[index].info.agregos.getLength !== 0) {
    state[index].info.agregos.forEach(element => newAmount.push(element.quantity))
  }
  const amount = useArrState(newAmount) 
  const agregosActive = useArrState(state[index].info.agregos)
  const agregoMainRef = useRef(null)
  const placeholderOption = useRef(null)
  const selectAgregosRef = useRef(null)

  const newAgrego = (e) => {
    const index = e.target.value
    document.querySelector(`#agrego-${index}`).disabled = true
    agregosActive.pushValue(agregos[index])
    e.target.value = 'placeholder'
    amount.updateValue(agregosActive.getLength(), 1)
  }

  const deleteAgrego = (index, id) => {
    agregosActive.deleteValue(index)
    document.querySelector(`#agrego-${id}`).disabled = false
    amount.deleteValue(index, 0)
  }

  const addAmount = (index) => {
    amount.updateValue(index, amount.arr[index]+1)
  }

  const removeAmount = (index) => {
    if (amount.arr[index] !== 0) {
      amount.updateValue(index, amount.arr[index]-1)
    }
  }

  useEffect(() => {
    if (agregosActive.getLength !==0 && amount.getLength !==0) {
      amount.arr.forEach((element, index) => {
        let item = agregosActive.arr[index]
        item.quantity = element
        agregosActive.updateValue(index, item)
      })
    }
  }, [amount.arr])

  useEffect(() => {
    setAgregoList(agregosActive.arr)
  }, [agregosActive.arr])

  useEffect(() => {
    if (selectAgregosRef.current) {
      selectAgregosRef.current.disabled = false
    }
    if (state[index].info.agregos.length !== 0) {
      state[index].info.agregos.forEach(element => {
        document.querySelector(`#agrego-${element.id}`).disabled = true
      })
    }
  },[])

  return (
    <div className="main-container-agregos">
      {agregosActive.getLength() !== 0 &&
      <div className="title-agregos">
          <VerticalDivider color={"#0891b2"} width={4}/>
          Agregos ➕
      </div>}
      <div className="agrego-main">
        <div className="agrego-list" ref={agregoMainRef}>
          {agregosActive.getLength() !== 0 && (
            agregosActive.arr.map((element, index) => {
              return  <div className={`${index === 0 ? "agrego-list-grid" : "agrego-list-grid agrego-grid"}`} key={index}>
                        <div className="text-info-agrego">{element.name}</div>
                        <div className="text-info-agrego" >{element.price}</div>
                        <div className="agrego-item-options">
                          <button className="button-amount" onClick={() => removeAmount(index)}>{"<"}</button>
                          <div>{amount.arr[index]}</div>
                          <button className="button-amount" onClick={() => addAmount(index)}>{">"}</button>
                          <button className="button-delete" onClick={() => deleteAgrego(index, element.id)}>
                            <MdDelete/>
                          </button>
                        </div>
                      </div>
              
            })
          )}
        </div>
        <select className="add-agrego" defaultValue='placeholder' disabled onChange={newAgrego} ref={selectAgregosRef} name="agrego-select" id="agrego-select">
          <option value='placeholder' disabled ref={placeholderOption}>Toca para añadir un agrego</option>
          {agregos.map((element, index) => {
            return  <option key={index} value={index} id={`agrego-${element.id}`}> {element.name} ${element.price}</option>
          })}
        </select>
      </div>
    </div>
  )
}