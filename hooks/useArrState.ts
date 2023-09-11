import { useState } from "react";

export function useArrState (initialValue: Object[] = []): Object {
    const [arr, setArr] = useState<Object[]>(initialValue)

    const updateValue = (index: number, value) => {
        const newArr: Object[] = [...arr]
        newArr[index] = value
        setArr(newArr)
    }

    const deleteValue = (index: number) => {
        const newArr: Object[] = [...arr]
        newArr.splice(index, 1)
        setArr(newArr)
    }

    const pushValue = (value: Object) => {
        const newArr: Object[] = [...arr]
        newArr.push(value)
        setArr(newArr)
    }

    const getLength = (): number =>  arr.length

    return {
        arr, 
        updateValue, 
        deleteValue, 
        pushValue,
        getLength,
    }
}
