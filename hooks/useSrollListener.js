'use client'

import { useState, useEffect } from "react";

export function useScrollListener (element) {

  const [visibility, setVisibility] = useState(true)

  const handleScroll = () => {
    let elementHTML = document.querySelector(element)
    const rect = elementHTML.getBoundingClientRect()
    if (rect.bottom <= 0 && rect.top <= 0) {
      setVisibility(false)
    } else {
      setVisibility(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return visibility
}