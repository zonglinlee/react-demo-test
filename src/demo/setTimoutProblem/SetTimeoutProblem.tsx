import React, {useEffect, useState} from "react";

const SetTimeoutProblem: React.FC = (props: any) => {
    const [counter1, setCounter1] = useState(1)
    const [counter2, setCounter2] = useState(1)
    useEffect(() => {
        setTimeout(() => {
            setCounter2(counter1)
        }, 3000)
        setCounter1(88)
    }, [])

    return (
        <div>hooks 的闭包缺陷 ---&gt; [ counter1: {counter1} | counter2(一直是1，并不会变为88) : {counter2} ]</div>
    )
}

export default SetTimeoutProblem
