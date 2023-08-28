import { useState, createContext } from "react";
import { useParams } from "next/navigation";
import fileJSON from '../data-menu.json'

export const MenuContext = createContext()

export function MenuProvider ({ children }) {

  const [modalFilterOpen, setModalFilterOpen] = useState(false)
  const { menu } = useParams()
  const ConfigData = fileJSON[menu].menu

  return (
    <MenuContext.Provider value={{ConfigData, modalFilterOpen, setModalFilterOpen}}>
      <section>
        {children}
      </section>
    </MenuContext.Provider>
  )
}