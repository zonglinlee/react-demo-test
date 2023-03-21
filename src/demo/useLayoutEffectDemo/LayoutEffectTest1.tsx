import {useEffect, useLayoutEffect, useState} from "react";

// useLayoutEffect永远比useEffect先执行
// https://talent500.co/blog/react-useeffect-v-s-uselayouteffect-hook-key-differences/
// useEffect 可能会造成页面页面渲染两次，形成闪烁，当出现这种问题的时候 可以试试 useLayoutEffect
const LayoutEffectTest1 = () => {
    const [num, setNum] = useState(0)
    useEffect(() => {
        console.log('useEffect')
    }, [num])
    //在类组件中用componentWillMount生命周期来实现
    useLayoutEffect(() => {
        console.log('useLayoutEffect') // 也可以在此进行事件绑定
        return () => {
            console.log(1) //	也可以在此进行事件绑定移除
        }
    }, [num])

    return (
        <button onClick={() => setNum(num => num + 1)} style={{cursor: 'pointer'}}>
            这是一个函数式组件————{num}
        </button>
    )
}
export default LayoutEffectTest1
