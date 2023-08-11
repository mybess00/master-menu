export const ACTION_CART = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  DELETE_ITEM_INDEX: 'DELETE_ITEM_INDEX',
  UPDATE_ITEM: 'UPDATE_ITEM',
  CLEAN_CART: 'CLEAN_CART',
  SET_ITEM_AMOUNT: 'SET_ITEM_AMOUNT',
  SET_PRICE_ORDER: 'SET_PRICE_ORDER',
}

export const INITIAL_STATE = window.localStorage.getItem('cart') || []

export const cartReducer = (state, action) => {
  if (action.type === ACTION_CART.ADD_ITEM) {
    const newState = [...state, action.payload]
    return newState
  } else if (action.type === ACTION_CART.DELETE_ITEM) {
    const newState = state.filter(element => element.item.id !== action.payload.item.id)
    return newState
  } else if (action.type === ACTION_CART.DELETE_ITEM_INDEX) {
    const newState = state.filter((element, index) => index !== action.payload)
    return newState
  } else if (action.type === ACTION_CART.UPDATE_ITEM) {
    const newState = [...state]
    newState[action.payload.index] = action.payload.order
    return newState
  } else if (action.type === ACTION_CART.CLEAN_CART) {
    const newState = []
    return newState
  } else if (action.type === ACTION_CART.SET_ITEM_AMOUNT) {
    const newState = state.map((element, index) => {
      if (index === action.payload.index) {
        element.info.quantity = action.payload.quantity
        element.info.total = element.item.offer ? element.item.offer*element.info.quantity : element.item.price*element.info.quantity
      }
      return element
    });
    console.log(newState)
    return newState
  } else if (action.type === ACTION_CART.SET_PRICE_ORDER) {
    const newState = state.map((element, index) => {

    })
  }
}