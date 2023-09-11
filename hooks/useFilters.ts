import { useState } from "react";
import { useSearchParams } from "next/navigation";

export function useFilters (): Object {
  const searchParams = useSearchParams()
  
  const initialState = (): Object => {
    const objParams = {}
    searchParams.forEach((value: string, key: string) => {
      objParams[key] = value
    })
    return objParams
  }

  const [filters, setFilters] = useState<Object>(initialState())

  const updateFilter = (key: string, value: string) => {
    const prevFilters = {...filters}
    prevFilters[key] = value
    setFilters({...prevFilters})
  }

  return {
    filters,
    updateFilter
  }
}