import { createContext } from "react";
import { useParams } from "next/navigation";
import fileJSON from '../data-menu.json'

export const MenuContext = createContext()

export function MenuProvider ({ children }) {

  const { menu } = useParams()
  const ConfigData = fileJSON[menu].menu

  return (
    <MenuContext.Provider value={{ConfigData}}>
      <section>
        {children}
      </section>
    </MenuContext.Provider>
  )
}