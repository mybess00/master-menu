'use client'

import { useRouter } from "next/navigation"

export default function Category ({ title, id, children }) {

  const router = useRouter()
  const link = router.asPath

  return (
    <a className="main-container-category" id={id} href={`${link}/${id}`}>
      <div className="shape-category">{title}</div>
      <div className="category-container"> 
        {children}
      </div>
    </a>
  )
}