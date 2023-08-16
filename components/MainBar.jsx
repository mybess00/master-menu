'use client'

import { useState, useEffect } from "react"
import "../styles/MainBar.css"
import Link from "next/link"
import { FaCartShopping } from "react-icons/fa6"
import fileJSON from '../data-menu.json'

export default function MainBar ({ menu }) {

  const [title, setTitle] =  useState(fileJSON[menu].info.name)
  const categories = fileJSON[menu].category.map(element => element)
  
  const handleScroll = () => {
    for (let index = categories.length-1; index >= 0; index--) {
      const element = categories[index]
      let categoryElement = document.getElementById(`shape-${element.id}`)
      const rect = categoryElement.getBoundingClientRect()
      if (rect.bottom <= 0) {
        setTitle(element.name)
        return
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
      <Link className="shoping-cart-icon" href={`/${menu}/cart`}>
        <FaCartShopping/>
      </Link>
      <h2 className="title-main-bar">{title}</h2>
      <label className="btn-main-bar" for="toggle-side-bar">
        <div className="child-btn-main-bar up-icon"></div>
        <div className="child-btn-main-bar down-icon"></div>
      </label>
    </nav>
  )
}