import {useEffect, useLayoutEffect, useState} from "react";

// useLayoutEffect永远比useEffect先执行
// https://talent500.co/blog/react-useeffect-v-s-uselayouteffect-hook-key-differences/
// useEffect 可能会造成页面页面渲染两次，形成闪烁，当出现这种问题的时候 可以试试 useLayoutEffect
export const LayoutEffectTest2 = () => {
    const [num, setNum] = useState(0)
    useEffect(() => {
        if (num === 0) {
            setNum(10 + Math.random() * 20)
        }
    }, [num])
    return (
        <button onClick={() => setNum(0)} style={{cursor: 'pointer'}}>
            useEffect(会闪烁): {num}
        </button>
    )
}
export const LayoutEffectTest3 = () => {
    const [num, setNum] = useState(0)
    useLayoutEffect(() => {
        if (num === 0) {
            setNum(10 + Math.random() * 20)
        }
    }, [num])
    return (
        <button onClick={() => setNum(0)} style={{cursor: 'pointer'}}>
            useLayoutEffect(不会闪烁): {num}
        </button>
    )
}
