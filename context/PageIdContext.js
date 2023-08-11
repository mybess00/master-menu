import { createContext } from "react";
import { useOrder } from "../hooks/useOrder";

export const PageIdContext = createContext()

export function PageIdProvider ({ children }) {

  const { order, setAgregoList, setAmount, setItemPrice } = useOrder()

  return (
    <PageIdContext.Provider value={{ 
      order, 
      setAgregoList,
      setAmount,
      setItemPrice
    }}>
      {children}
    </PageIdContext.Provider>)
}
