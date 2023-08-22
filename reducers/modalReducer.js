export const ACTION_MODAL = {
  SET_AMOUNT: 'SET_AMOUNT',
  SET_PRICE: 'SET_PRICE',
  SET_TOTAL_PRICE: 'SET_TOTAL_PRICE',
}

export const INITIAL_MODAL_STATE = {
  agregos: [],
  agregos_price: 0,
  quantity: 1,
  price: 0,
  total: 0
}

export const modalReducer = (state, action) => {
  if (action.type === ACTION_MODAL.SET_AMOUNT) {
    return {
      ...state,
      quantity: action.payload
    }
  } else if (action.type === ACTION_MODAL.SET_TOTAL_PRICE) {
    return {
      ...state,
      total: action.payload
    }
  } else if (action.type === ACTION_MODAL.SET_PRICE) {
    return {
      ...state,
      price: action.payload
    }
  }
}