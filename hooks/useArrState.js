import { useState } from "react";

export function useArrState (initialValue = []) {
    const [arr, setArr] = useState(initialValue)

    const updateValue = (index, value) => {
        const newArr = arr.map(value => value)
        newArr[index] = value
        setArr(newArr)
    }

    const deleteValue = (index) => {
        const newArr = [...arr]
        newArr.splice(index, 1)
        setArr(newArr)
    }

    const pushValue = (value) => {
        const newArr = [...arr]
        newArr.push(value)
        setArr(newArr)
    }

    const getLength = () =>  arr.length    

    return {
        arr, 
        updateValue, 
        deleteValue, 
        pushValue,
        getLength
    }
}
