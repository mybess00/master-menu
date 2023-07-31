import { createContext, useEffect } from "react";
import { useCart } from "../hooks/useCart";

export const CartContext = createContext()

export function CartProvider ({children}) {

  const { cart, addItem, deleteItem, isOnCart } = useCart()


  return (
    <CartContext.Provider value={{
      cart,
      deleteItem,
      addItem,
      isOnCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}