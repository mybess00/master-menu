import { createContext, useReducer, useEffect, useState } from "react";
import { cartReducer, ACTION_CART } from "../reducers/cartReducer";

export const CartContext = createContext()

export function CartProvider ({ children }) {

  const INITIAL_STATE = []
  
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
    const cartStorage = JSON.parse(window.localStorage.getItem('cart')) || []
    dispatch({ type: ACTION_CART.SET_CAR, payload: cartStorage })
  }, [])

  useEffect(() => {
    const newPrice = setOrderPrice()
    setTotalPrice(newPrice)
  }, [state])
  
  return (
    <CartContext.Provider value={{ state, dispatch, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}