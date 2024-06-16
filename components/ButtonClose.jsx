'use client'

import 'styles/ButtonClose.scss'
import { useRouter } from "next/navigation"
import { FaAngleLeft } from "react-icons/fa6"

export default function ButtonClose () {
  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  return <div className="close-button" onClick={goBack}> <FaAngleLeft/> </div>
}