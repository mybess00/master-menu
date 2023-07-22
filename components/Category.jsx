import Link from "next/link"

export default function Category ({ title, id, children, menu }) {
  return (
    <div className="main-container-category" id={id}>
      <Link href={`/${menu}/${id}`} className="shape-category" >
        {title}
      </Link>
      <div className="category-container"> 
        {children}
      </div>
    </div>
  )
}