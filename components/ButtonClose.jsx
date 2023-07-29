'use client'

import { useRouter, useParams } from "next/navigation"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { FaAngleLeft } from "react-icons/fa6"

export default function ButtonClose () {
  const router = useRouter()
  const { menu } = useParams()
  const goBack = () => {
    router.back()
  }
  return <div className="close-button" onClick={goBack}> <FaAngleLeft/> </div>
}