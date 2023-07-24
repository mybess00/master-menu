import { useState } from "react";

export function useArrState (initialValue) {
    const [arr, setArr] = useState(initialValue)

    const updateValue = (index, value) => {
        const newArr = [...arr]
        newArr[index] = value
        setArr(newArr)
    }

    return [arr, updateValue]
}
