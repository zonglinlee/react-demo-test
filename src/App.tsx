import React from 'react';
import './App.css';
import SetTimeoutProblem from "./demo/setTimoutProblem/SetTimeoutProblem";
import NoneSetTimeoutProblem from "./demo/setTimoutProblem/NoneSetTimeoutProblem";

function App() {
    return (
        <div className="App">
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <ContentWrapper title="第2题：实现一个 useTimeout Hook"><SetTimeoutProblem/></ContentWrapper>
                <ContentWrapper title="useTimeout Hook"><NoneSetTimeoutProblem/></ContentWrapper>
            </div>
        </div>
    );
}

function ContentWrapper(props: any) {
    const {children, title} = props
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", width: "50%"}}>
            <div style={{fontWeight: "bold"}}>{title}</div>
            <div>{children}</div>
        </div>
    )
}

export default App;
