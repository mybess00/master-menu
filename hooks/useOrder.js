import { useReducer, useEffect } from "react";
import { orderReducer, INITIAL_STATE, ACTION_TYPES } from "../reducers/orderReducer";

export function useOrder ()/*: Object*/ {
  
  const [state, dispatch] = useReducer(orderReducer, INITIAL_STATE)

  console.log(typeof state)

  const setItemPrice = (price/*: number*/) => {
    try {
      dispatch({ type: ACTION_TYPES.SET_ITEM_PRICE, payload: price }) 
      setAgregoPrice()
      setTotalPrice()
      return true
    } catch (error) {
      return false
    }
  }

  const setAmount = (amount/*: number*/) => {
    try {
      dispatch({ type: ACTION_TYPES.SET_AMOUNT, payload: amount}) 
      setAgregoPrice()
      setTotalPrice()
      return true
    } catch (error) {
      return false
    }
  }

  const setAgregoList = (agregos/*: Object[]*/) => {
    try {
      dispatch({ type: ACTION_TYPES.SET_AGREGO_LIST, payload: agregos})
      setAgregoPrice()
      setTotalPrice()
      return true 
    } catch (error) {
      return false
    }
  }

  const setAgregoPrice = () => {
    try {
      dispatch({ type: ACTION_TYPES.SET_AGREGO_PRICE })
      return true
    } catch (error) {
      return false
    }
  }

  const setTotalPrice = () => {
    try {
      dispatch({ type: ACTION_TYPES.SET_TOTAL_PRICE })
      return true
    } catch (error) {
      return false
    }
  }

  useEffect(() => {
    setAgregoPrice()
    setTotalPrice()
  }, [state.amountItem, state.agregoList])

  return {
    order: state,
    setAgregoList,
    setAgregoPrice,
    setAmount,
    setItemPrice,
    setTotalPrice,
  }
}