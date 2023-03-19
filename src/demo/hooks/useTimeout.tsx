import {useEffect, useRef} from "react";
// @ts-ignore
export default function useTimeout(callback, delay) {
    const memorizeCallback = useRef()
    useEffect(() => {
        memorizeCallback.current = callback
    }, [callback])
    useEffect(() => {
        if (delay !== null) {
            const timer = setTimeout(() => {
                // @ts-ignore
                memorizeCallback.current()
            }, delay)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [delay])
}
