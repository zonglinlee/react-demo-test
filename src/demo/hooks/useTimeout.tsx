import {useEffect, useRef} from "react";
// @ts-ignore
export default function useTimeout(callback, delay) {
    const memorizeCallback = useRef()
    useEffect(() => {
        console.log("set useTimeout callback") // 这里每次都会调用(因为每次传入的 callback 都不是同一个函数，是一个新的函数)
        memorizeCallback.current = callback
    }, [callback])
    useEffect(() => {
        if (delay !== null) {
            const timer = setTimeout(() => {
                console.log("useTimeout callback called") // delay 不变的情况下， 这里只会调用 一次
                // @ts-ignore
                memorizeCallback.current()
            }, delay)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [delay])
}
