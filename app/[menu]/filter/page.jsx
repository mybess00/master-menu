'use client'
import { useSearchParams } from "next/navigation"

export default function PageFilter () {

    const objParams = {}
    const searchParams = useSearchParams()
    searchParams.forEach((value, key) => {
        if (key == 'price' || key === 'categories') {
            const newValue = Array.from(value.split(','))
            console.log(typeof(newValue))
            objParams[key] = Array.from(newValue)
        }
        objParams[key] = value
    })

    console.log(objParams)

    return (
        <div>
        </div>
    )
}