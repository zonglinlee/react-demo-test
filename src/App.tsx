import React from 'react';
import './App.css';
import SetTimeoutProblem from "./demo/setTimoutProblem/SetTimeoutProblem";
import NoneSetTimeoutProblem from "./demo/setTimoutProblem/NoneSetTimeoutProblem";
import LayoutEffectTest1 from "./demo/useLayoutEffectDemo/LayoutEffectTest1";
import {LayoutEffectTest2, LayoutEffectTest3} from "./demo/useLayoutEffectDemo/LayoutEffectTest2";

function App() {
    return (
        <div className="App">
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <ContentWrapper title="第2题：实现一个 useTimeout Hook"><SetTimeoutProblem/></ContentWrapper>
                <ContentWrapper title="useTimeout Hook"><NoneSetTimeoutProblem/></ContentWrapper>
                <ContentWrapper title="useLayoutEffect hooks"><LayoutEffectTest1></LayoutEffectTest1></ContentWrapper>
                <ContentWrapper title="useLayoutEffect hooks">
                    <LayoutEffectTest2></LayoutEffectTest2>
                    <LayoutEffectTest3></LayoutEffectTest3>
                </ContentWrapper>
            </div>
        </div>
    );
}

function ContentWrapper(props: any) {
    const {children, title} = props
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "50%",
            marginBottom: '25px'
        }}>
            <div style={{fontWeight: "bold"}}>{title}</div>
            <div>{children}</div>
        </div>
    )
}

export default App;
