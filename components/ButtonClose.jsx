'use client'

import { useRouter, useParams } from "next/navigation"

export default function ButtonClose () {
  const router = useRouter()
  const { menu } = useParams()
  const goBack = () => {
    router.back()
  }
  return <div onClick={goBack}>X</div>
}