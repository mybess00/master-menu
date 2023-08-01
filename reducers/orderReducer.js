export const ACTION_TYPES = {
  SET_AMOUNT: 'SET_AMOUNT',
  SET_ITEM_PRICE: 'SET_ITEM_PRICE',
  SET_AGREGO_LIST: 'SET_AGREGO_LIST',
  SET_AGREGO_PRICE: 'SET_AGREGO_PRICE',
  SET_TOTAL_PRICE: 'SET_TOTAL_PRICE',
}

export const INITIAL_STATE = {
  itemPrice: 0,
  amountItem: 1,
  agregoList: [],
  agregoPrice: 0,
  totalPrice: 0,
}

export const orderReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_AMOUNT: 
      return {
        ...state,
        amountItem: action.payload
      }
    case ACTION_TYPES.SET_ITEM_PRICE: 
      return {
        ...state,
        itemPrice: action.payload
      }
    case ACTION_TYPES.SET_AGREGO_LIST: 
      return {
        ...state,
        agregoList: action.payload
      }
    case ACTION_TYPES.SET_AGREGO_PRICE:
      let newPrice = 0
      state.agregoList.forEach(element => {
        newPrice += element.price*element.quantity
      }); 
      newPrice = newPrice*state.amountItem
      return {
        ...state,
        agregoPrice: newPrice
      }

    case ACTION_TYPES.SET_TOTAL_PRICE:
      let total = 0
      total = state.itemPrice*state.amountItem+state.agregoPrice
      return {
        ...state,
        totalPrice: total
      }
  }
}