import {useState} from "react";

export const ContextDemo1 = () => {
    const [num, setNum] = useState(1)
    return (
        <div style={{marginRight: '30px'}}>
            <button style={{cursor: "pointer"}} onClick={() => setNum(num => num + 1)}>增加num的值+1</button>
            <br/>
            <Item1 num={num}/>
            <Item2 num={num}/>
        </div>
    )
}


function Item1({num}: { num: number }) {
    return (
        <div>
            子组件1 num：{num}
        </div>
    )
}

function Item2({num}: { num: number }) {
    return (
        <div>
            子组件2 num：{num}
        </div>
    )
}
