'use client'
import { useState, useEffect } from "react"

export default function ButtonAddCar ({ id, price }) {

  const [isAdd, setIsAdd] = useState(false)
  const [textBtn, setTextBtn] = useState(price)
  
  const handleClick = () => {
    setIsAdd(!isAdd)
  }

  useEffect(() => {
    if (isAdd) {
      setTextBtn('Añadido')
      return 
    }
    setTextBtn(price)
  }, [isAdd])


  return (
    <button className="btn-add-car" onClick={handleClick}>
      {textBtn}
    </button>
  )
}