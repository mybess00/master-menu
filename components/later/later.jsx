'use client'
import { useState, useEffect } from "react"

export default function Later ({ id, price, children }) {
  const [isAdd, setIsAdd] = useState(false)
  const [textBtn, setTextBtn] = useState(price)
  const [itemAmount, setItemAmount] = useState(0)
  const [visibilityAmount, setVisibilityAmount] = useState('none')


  const handleClick = () => {
    setIsAdd(!isAdd)
  }

  useEffect(() => {
    if (isAdd) {
      setTextBtn('Añadido')
      setItemAmount(itemAmount+1)
      setVisibilityAmount('flex')
      return 
    }
    setTextBtn(price)
    setItemAmount(0)
    setVisibilityAmount('none')
  }, [isAdd])

  const addItem = () => {
    setItemAmount(itemAmount+1)
  }
  const removeItem = () => {
    if (itemAmount == 1) {
      handleClick()
      return
    }
    setItemAmount(itemAmount-1)
  }

  return (
    <div className="container-btn">
      <div className="main-container-btn">
        {children}
        <button className="btn-add-car" onClick={handleClick}>
          {textBtn}
        </button>
      </div>
      <div className="amount-main-container" style={{display: visibilityAmount}}>
        <div className="amount-container"> 
          <div>
            {(parseInt(price)*itemAmount).toFixed(2)}
          </div>
          <div className="button-amount" onClick={removeItem}>
            {'<'}
          </div>
          <div>
            {itemAmount}
          </div>
          <div className="button-amount" onClick={addItem}>
            {'>'}
          </div>
        </div>
      </div>
    </div>
  )
}