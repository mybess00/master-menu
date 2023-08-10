import { useReducer, useState } from "react";
import { orderReducer, INITIAL_STATE, ACTION_TYPES } from "../reducers/orderReducer";

export function useOrder () {
  
  const [state, dispatch] = useReducer(orderReducer, INITIAL_STATE)

  const setItemPrice = ( price ) => {
    try {
      dispatch({ type: ACTION_TYPES.SET_ITEM_PRICE, payload: price }) 
      return true
    } catch (error) {
      return false
    }
  }

  const setAmount = (amount) => {
    try {
      dispatch({ type: ACTION_TYPES.SET_AMOUNT, payload: amount}) 
      return true
    } catch (error) {
      return false
    }
  }

  const setAgregoList = (agregos) => {
    try {
      dispatch({ type: ACTION_TYPES.SET_AGREGO_LIST, payload: agregos})
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

  useState(() => {
    setAgregoPrice()
    setTotalPrice()
  }, [state.agregoList, state.amountItem, state.itemPrice])

  return {
    order: state,
    setAgregoList,
    setAgregoPrice,
    setAmount,
    setItemPrice,
    setTotalPrice,
  }
}