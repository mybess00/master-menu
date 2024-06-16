'use client'

import { usePathname } from 'next/navigation'
import SideBar from 'components/SideBar'
import BottomBar from 'components/BottomBar'
import MainBar from 'components/MainBar'
import DesktopBar from 'components/DesktopBar'
import Filters from 'components/Filters'
import { MenuProvider } from 'context/MenuContext'
import fileJSON from '../../data-menu.json'

export default function LayoutMenu ({ children, params }) {

  const { menu, category } = params
  const pathname = usePathname()

  const isMainPage = () => {
    if (!category && pathname.split('/').length <= 2) {
      return true
    }
    return false
  }

  if (!fileJSON[menu]){
    return  <div>
              <h1>NO EXISTE EL MENU BUSCADO</h1>
            </div>
  }
  
  return (
    <MenuProvider>
      <SideBar />
      {isMainPage() && <MainBar />}
      <BottomBar />
      <DesktopBar />
      <Filters />
      {children}
    </MenuProvider>
  )
}