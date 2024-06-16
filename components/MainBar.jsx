'use client'

import "styles/MainBar.scss"
import { useState, useEffect, useContext } from "react"
import { MenuContext } from "context/MenuContext"
import Link from "next/link"
import CartButtonCounter from "components/CartButtonCounter"

export default function MainBar () {

  const { ConfigData } = useContext(MenuContext)
  const [title, setTitle] =  useState(ConfigData.info.name)
  const categories = ConfigData.category.map(element => element)
    
  const handleScroll = () => {
    for (let index = categories.length-1; index >= 0; index--) {
      const element = categories[index]
      let categoryElement = document.getElementById(`shape-${element.id}`)
      if (categoryElement) {
        const rect = categoryElement.getBoundingClientRect()
        if (rect.bottom < rect.height) {
          setTitle(element.name)
          return
        }
      }
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="main-bar">
      <Link className="shoping-cart-icon" href={`/${ConfigData.id}/cart`}>
        <CartButtonCounter />
      </Link>
      <h2 className="title-main-bar">{title}</h2>
      <label className="btn-main-bar" htmlFor="toggle-side-bar">
        <div className="child-btn-main-bar up-icon"></div>
        <div className="child-btn-main-bar down-icon"></div>
      </label>
    </nav>
  )
}