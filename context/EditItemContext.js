import { createContext } from "react";
import { useOrder } from "../hooks/useOrder";

export const EditItemContext = createContext()

export function EditItemProvider ({ children }) {

  const { order, setAgregoList, setAmount, setItemPrice } = useOrder()

  return (
    <EditItemContext.Provider value={{ 
      order, 
      setAgregoList,
      setAmount,
      setItemPrice
    }}>
      {children}
    </EditItemContext.Provider>)
}
