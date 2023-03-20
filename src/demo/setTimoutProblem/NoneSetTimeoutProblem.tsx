import React, {useEffect, useState} from "react";
import useTimeout from "../hooks/useTimeout";

const SetTimeoutProblem: React.FC = (props: any) => {
    const [counter1, setCounter1] = useState(1)
    const [counter2, setCounter2] = useState(1)
    useTimeout(() => {
        setCounter2(counter1)
    }, 3000)
    useEffect(() => {
        setCounter1(88)
    }, [])
    return (
        <div>useTimeout 解决 hooks 的闭包缺陷 ---&gt; [ counter1: {counter1} | counter2 : {counter2} ]</div>
    )
}

export default SetTimeoutProblem
