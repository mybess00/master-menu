import { createContext, useEffect } from "react";
import { useCart } from "../hooks/useCart";

export const CartContext = createContext()

export function CartProvider ({children}) {

  const { cart, addItem, deleteItem, isOnCart, isSameOrder } = useCart()


  return (
    <CartContext.Provider value={{
      cart,
      deleteItem,
      addItem,
      isOnCart,
      isSameOrder,
    }}>
      {children}
    </CartContext.Provider>
  )
}