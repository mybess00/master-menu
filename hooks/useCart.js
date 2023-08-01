import { useState, useEffect } from "react";

export function useCart (initialValue =  JSON.parse(localStorage.getItem('shoppinCart')) || []) {
  const [cart, setCart] = useState(initialValue)

  const addItem = item => {
    const newCart = structuredClone(cart)
    newCart.push(item)
    setCart(newCart)
  }

  const deleteItem = item => {
    const newCart = structuredClone(cart)
    const index = newCart.findIndex(element => element.item.id == item.id)
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const isOnCart = item => {
    const indexItem = cart.findIndex(element => element.item.id == item.id)
    if (indexItem == -1) {
      return false
    }
    return true
  }

  const isSameOrder = order => {
    
    const filtersItem = cart.filter(element => element.item.id == order.item.id && JSON.stringify(element.info.agregos) == JSON.stringify(order.info.agregos))
    if (filtersItem.length == 0) {
      console.log(filtersItem.length)
      return false
    }
    filtersItem.forEach((element, index) => {
      console.log(index + ' ' + JSON.stringify(element.info.agregos))
      console.log(index + ' ' + JSON.stringify(order.info.agregos))
    })
    return true
   /* const { info } = cart[indexItem]
    console.log(info.agregos)
    console.log(order.info.agregos)
    if (info.agregos.toString() == order.info.agregos.toString()) {
      return true
    }
    return false*/
  }

  const cleanCart = () => setCart([])

  useEffect(() => {
    localStorage.setItem('shoppinCart', JSON.stringify(cart))
    console.log(cart)
  }, [cart])

  return({
    cart,
    addItem,
    deleteItem,
    isOnCart,
    cleanCart,
    isSameOrder,
  })
}