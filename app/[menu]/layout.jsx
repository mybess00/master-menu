import SideBar from '../../components/SideBar'
export default function LayoutMenu ({ children }) {
  return (
    <section>
      <SideBar />
      {children}
    </section>
  )
}