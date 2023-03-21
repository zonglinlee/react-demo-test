import {createContext, useContext, useState} from "react";

const Context = createContext(0)
export const ContextDemo2 = () => {
    const [num, setNum] = useState(1)
    return (
        <div>
            <button style={{cursor: "pointer"}} onClick={() => setNum(num => num + 1)}>增加num的值+1</button>
            <br/>
            <Context.Provider value={num}>
                <Item1/>
                <Item2/>
            </Context.Provider>
        </div>
    )
}


function Item1() {
    const num = useContext(Context)
    return (
        <div>
            子组件1 num：{num}
        </div>
    )
}

function Item2() {
    const num = useContext(Context)
    return (
        <div>
            子组件2 num：{num + 2}
        </div>
    )
}
