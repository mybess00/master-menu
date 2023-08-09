import { createContext, useReducer, useEffect, useState } from "react";
import { cartReducer, INITIAL_STATE } from "../reducers/cartReducer";

export const CartContext = createContext()

export function CartProvider ({ children }) {

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const [totalPrice, setTotalPrice] = useState(0)

  const setOrderPrice = () => {
    let total = 0
    state.forEach(element => {
      let elementPrice = element.info.total
      total += elementPrice
    });
    return total
  }
  useEffect(() => {
    const newPrice = setOrderPrice()
    setTotalPrice(newPrice)
    console.log(state)
  }, [state])
  return (
    <CartContext.Provider value={{ state, dispatch, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}