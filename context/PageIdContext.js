import { createContext, useEffect, useReducer } from "react";
import { INITIAL_STATE, orderReducer, ACTION_TYPES } from "../reducers/orderReducer";

export const PageIdContext = createContext()

export function PageIdProvider ({ children }) {

  const [state, dispatch] = useReducer(orderReducer, INITIAL_STATE)

  useEffect(() => {
   dispatch( {type: ACTION_TYPES.SET_AGREGO_PRICE })
  }, [state.agregoList, state.amountItem])


  useEffect(() => {
    dispatch( { type: ACTION_TYPES.SET_TOTAL_PRICE })
  }, [state.agregoList, state.amountItem, state.itemPrice])

  return (
    <PageIdContext.Provider value={{ state, dispatch }}>
      {children}
    </PageIdContext.Provider>)
}
