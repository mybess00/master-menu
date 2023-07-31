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
    const index = newCart.findIndex(element => element.id == item.id)
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const isOnCart = item => {
    const indexItem = cart.findIndex(element => element.id == item.id)
    if (indexItem == -1) {
      return false
    }
    return true
  }

  const clearCart = () => setCart([])

  useEffect(() => {
    localStorage.setItem('shoppinCart', JSON.stringify(cart))
    console.log(cart)
  }, [cart])

  return({
    cart,
    addItem,
    deleteItem,
    isOnCart,
    clearCart,
  })
}