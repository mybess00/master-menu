import SideBar from '../../components/SideBar'
import fileJSON from '../../data-menu.json'
export default function LayoutMenu ({ children, params }) {
  const { menu } = params
  if (!fileJSON[menu]){
    return  <div>
              <h1>NO EXISTE EL MENU BUSCADO</h1>
            </div>
  }
  return (
    <section>
      <SideBar menu={menu}/>
      {children}
    </section>
  )
}