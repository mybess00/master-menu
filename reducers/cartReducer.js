export const ACTION_CART = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  DELETE_ITEM_INDEX: 'DELETE_ITEM_INDEX',
  UPDATE_ITEM: 'UPDATE_ITEM',
  SET_CAR: 'SET_CAR',
  CLEAN_CART: 'CLEAN_CART',
  SET_ITEM_AMOUNT: 'SET_ITEM_AMOUNT',
  SET_PRICE_ORDER: 'SET_PRICE_ORDER',
}

//export const INITIAL_STATE = []

export const updateLocalStorage = (file) => {
  window.localStorage.setItem('cart', JSON.stringify(file))
}

export const cartReducer = (state, action) => {
  if (action.type === ACTION_CART.ADD_ITEM) {
    const newState = [...state, action.payload]
    updateLocalStorage(newState)
    return newState
  } else if (action.type === ACTION_CART.DELETE_ITEM) {
    const newState = state.filter(element => element.item.id !== action.payload.item.id)
    updateLocalStorage(newState)
    return newState
  } else if (action.type === ACTION_CART.DELETE_ITEM_INDEX) {
    const newState = state.filter((element, index) => index !== action.payload)
    updateLocalStorage(newState)
    return newState
  } else if (action.type === ACTION_CART.UPDATE_ITEM) {
    const newState = [...state]
    newState[action.payload.index] = action.payload.order
    updateLocalStorage(newState)
    return newState
  } else if (action.type === ACTION_CART.SET_CAR) {
    const newState = action.payload
    return newState
  } else if (action.type === ACTION_CART.CLEAN_CART) {
    const newState = []
    updateLocalStorage(newState)
    return newState
  } else if (action.type === ACTION_CART.SET_ITEM_AMOUNT) {
    const newState = state.map((element, index) => {
      if (index === action.payload.index) {
        element.info.quantity = action.payload.quantity
        element.info.total = element.item.offer ? element.item.offer*element.info.quantity : element.item.price*element.info.quantity
      }
      return element
    });
    updateLocalStorage(newState)
    return newState
  } else if (action.type === ACTION_CART.SET_PRICE_ORDER) {
    const newState = state.map((element, index) => {

    })
  }
}