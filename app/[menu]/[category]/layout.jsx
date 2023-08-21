'use client'

import { useContext } from "react"
import { MenuContext } from "../../../context/MenuContext"
import NavBar from "../../../components/NavBar"
import TopBar from "../../../components/TopBar"

export default function LayoutCategoty ({ children, params }) {

  const { ConfigData } = useContext(MenuContext)
  const { category } = params

  const categoryOptions = ConfigData.category.find(({ id }) => id == category)
  
  return (
    <>
      <NavBar title={categoryOptions.name}/>
      <TopBar />
      {children}
    </>
  )
}