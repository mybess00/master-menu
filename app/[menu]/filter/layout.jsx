import TopBar from "../../../components/TopBar"
import NavBar from "../../../components/NavBar"

export default function LayoutFilter ({ children }) {
  return (
    <section>
      <NavBar title="Filtros"/>
      <TopBar />
      {children}
    </section>
  )
}