'use client'

import "../styles/DesktopBar.css"
import { useContext, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { CartContext } from "../context/CartContext"
import { MenuContext } from "../context/MenuContext"
import VerticalDivider from "./VerticalDivider"
import CartButtonCounter from "./CartButtonCounter"
import CategoryList from "./sidebar/CategoryList"
import { BsMenuUp } from "react-icons/bs"

export default function DesktopBar () {

  const { state, totalPrice } = useContext(CartContext)
  const { ConfigData } = useContext(MenuContext)
  const [visibility, setVisibility] = useState(false)
  const router = useRouter()
  const { category } = useParams()

  const goToCart = () => {
    router.push(`/${ConfigData.id}/cart`)
  }

  const handleMenu = () => {
    setVisibility(!visibility)
  }

  const getCategoryName = ConfigData.category.filter(element => element.id === category)

  return (
    <>
    <input type="checkbox" checked={visibility} className="input-categories"/>
    <label className="label-category-pc" onClick={handleMenu}></label>
    <nav className="desktop-bar-container">
      <div className="menu-desktop-bar">
        <button className="option-desktop-bar" onClick={handleMenu}>
          <CategoryList updateInputValue={setVisibility}/>
          <BsMenuUp/>
        </button>
        <button className="option-desktop-bar" onClick={goToCart}>
          <CartButtonCounter counter={state.length} />
        </button>
      </div>
      {state.length != 0 && <div className="info-desktop-bar">
        <div className="total-price-desktop-bar">
          <VerticalDivider color={'green'} width={7} />
          <div className="total-price">Total: {totalPrice.toFixed(2)} CUP</div>
        </div>
        <button className="buy-button" onClick={goToCart}>
          PAGAR
        </button>
      </div>}
    </nav>
    </>
  )
}