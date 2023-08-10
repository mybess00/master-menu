import { createContext } from "react";
import { useOrder } from "../hooks/useOrder";

export const PageIdContext = createContext()
export const EditItemContext = createContext()

export function EditItemProvider ({ children }) {

  const { order, setAgregoList, setAmount, setItemPrice } = useOrder()

  return (
    <OrderContext.Provider value={{ 
      order, 
      setAgregoList,
      setAmount,
      setItemPrice
    }}>
      {children}
    </OrderContext.Provider>)
}

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
