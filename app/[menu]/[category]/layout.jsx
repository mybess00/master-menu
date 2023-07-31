import NavBar from "../../../components/NavBar"
import fileJSON from "../../../data-menu.json"

export default function LayoutCategoty ({ children, params }) {

  const { menu, category } = params
  const Config = fileJSON[menu]

  const categoryOptions = Config["category"].find(({ id }) => id == category)
  
  return (
    <>
    <NavBar title={categoryOptions.name}/>
    <div>
      {children}
    </div>
    </>
  )
}