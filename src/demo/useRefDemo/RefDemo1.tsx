import {useEffect, useRef, useState} from "react";

export const RefDemo1 = () => {
    const [count, setCount] = useState(0)
    let timer: string | number | NodeJS.Timer | undefined;
    useEffect(() => {
        timer = setInterval(() => {
            setCount(count => count + 1)
        }, 500)
    }, [])
    useEffect(() => {
        if (count > 6) {
            clearTimeout(timer)
        }
    }, [count])
    return (
        <div style={{cursor: 'pointer'}}>
            {count}
        </div>
    )
}

export const RefDemo2 = () => {
    const [count, setCount] = useState(0)
    let timerRef = useRef({})
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCount(count => count + 1)
        }, 500)
    }, [])
    useEffect(() => {
        if (count > 6) {
            // @ts-ignore
            clearTimeout(timerRef.current)
        }
    }, [count])
    return (
        <div style={{cursor: 'pointer'}}>
            {count}
        </div>
    )
}
