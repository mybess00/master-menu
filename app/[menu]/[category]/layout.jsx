'use client'

import { useContext } from "react"
import NavBar from "../../../components/NavBar"
import { MenuContext } from "../../../context/MenuContext"


export default function LayoutCategoty ({ children, params }) {

  const { ConfigData } = useContext(MenuContext)
  const { category } = params

  const categoryOptions = ConfigData.category.find(({ id }) => id == category)
  
  return (
    <>
      <NavBar title={categoryOptions.name}/>
      {children}
    </>
  )
}