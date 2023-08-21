import "../styles/DesktopBar.css"

import { FaCartShopping } from "react-icons/fa6"

export default function CartButtonCounter ({ counter }) {
  return (
    <>
    {counter !== 0 && <div className="counter">{counter}</div>}
    <FaCartShopping/>
    </>
  )
}