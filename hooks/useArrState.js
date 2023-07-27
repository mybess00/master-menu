import { useState } from "react";

export function useArrState (initialValue = []) {
    const [getArr, setArr] = useState(initialValue)

    const updateValue = (index, value) => {
        const newArr = getArr.map(value => value)
        newArr[index] = value
        setArr(newArr)
    }

    const deleteValue = (index) => {
        const newArr = [...getArr]
        newArr.splice(index, 1)
        setArr(newArr)
    }

    const pushValue = (value) => {
        const newArr = [...getArr]
        newArr.push(value)
        setArr(newArr)
    }

    const getLength = () => arr.length

    return {
        getArr, 
        updateValue, 
        deleteValue, 
        pushValue,
        getLength
    }
}
