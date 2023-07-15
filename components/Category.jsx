'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Category ({ title, id, children }) {

  const path = usePathname()

  return (
    <div className="main-container-category" id={id}>
      <Link className="shape-category" href={`${path}/${id}`}>
        {title}
      </Link>
      <div className="category-container"> 
        {children}
      </div>
    </div>
  )
}