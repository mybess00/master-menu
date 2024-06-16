import 'styles/Category.scss'
import Link from "next/link"

export default function Category ({ title, id, children, menu }) {
  return (
    <div className="main-container-category" id={id}>
      <Link href={`/${menu}/${id}`} className="shape-category" id={`shape-${id}`}>
        {title}
      </Link>
      <div className="category-container"> 
        {children}
      </div>
    </div>
  )
}