import NavBar from "../../../components/NavBar"

export default function LayoutCategoty ({ children, params }) {

  const { category } = params

  return (
    <>
    <NavBar id={category}/>
    <div>
      {children}
    </div>
    </>
  )
}