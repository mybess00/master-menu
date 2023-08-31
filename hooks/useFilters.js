import { useState } from "react";
import { useSearchParams } from "next/navigation";

export function useFilters () {
  const searchParams = useSearchParams()
  const initialState = () => {
    const objParams = {}
    searchParams.forEach((value, key) => {
      objParams[key] = value
    })
    return objParams
  }

  const [filters, setFilters] = useState(initialState())

  const updateFilter = (key, value) => {
    const prevFilters = {...filters}
    prevFilters[key] = value
    setFilters({...prevFilters})
  }

  return {
    filters,
    updateFilter
  }
}