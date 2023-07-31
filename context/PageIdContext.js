import { createContext, useState, useEffect } from "react";

export const PageIdContext = createContext()

export function PageIdProvider ({ children }) {

  const [amountItem, setAmountItem] = useState(1)
  const [itemPrice, setItemPrice] = useState(0)
  const [agregoPrice, setAgregoPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const totalItemPrice = itemPrice*amountItem
    const totalAgregoPrice = agregoPrice*amountItem
    setTotalPrice(totalItemPrice+totalAgregoPrice)
  }, [amountItem, agregoPrice, itemPrice])

  return (
  <PageIdContext.Provider value={{
    amountItem,
    setAmountItem,
    itemPrice,
    setItemPrice,
    agregoPrice, 
    setAgregoPrice,
    totalPrice
  }}>
    {children}
  </PageIdContext.Provider>)
}
