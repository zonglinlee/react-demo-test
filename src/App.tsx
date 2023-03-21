import React from 'react';
import './App.css';
import SetTimeoutProblem from "./demo/setTimoutProblem/SetTimeoutProblem";
import NoneSetTimeoutProblem from "./demo/setTimoutProblem/NoneSetTimeoutProblem";
import LayoutEffectTest1 from "./demo/useLayoutEffectDemo/LayoutEffectTest1";
import {LayoutEffectTest2, LayoutEffectTest3} from "./demo/useLayoutEffectDemo/LayoutEffectTest2";
import {RefDemo1, RefDemo2} from "./demo/useRefDemo/RefDemo1";
import {ContextDemo1} from "./demo/useContextDemo/ContextDemo1";
import {ContextDemo2} from "./demo/useContextDemo/ContextDemo2";
import './demo/immutableTest/immutableDemo1'
import {UnControlInput} from "./demo/formElement/UnControlInput";

function App() {
    return (
        <div className="App">
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <ContentWrapper title="第2题：实现一个 useTimeout Hook"><SetTimeoutProblem/></ContentWrapper>
                <ContentWrapper title="useTimeout Hook"><NoneSetTimeoutProblem/></ContentWrapper>
                <ContentWrapper title="useLayoutEffect hooks"><LayoutEffectTest1/></ContentWrapper>
                <ContentWrapper title="useLayoutEffect hooks">
                    <LayoutEffectTest2/>
                    <LayoutEffectTest3/>
                </ContentWrapper>
                <ContentWrapper title="useRef demo">
                    <RefDemo1/>
                    <RefDemo2/>
                </ContentWrapper>
                <ContentWrapper title="useContext demo">
                    <div style={{display: 'flex'}}>
                        <ContextDemo1/>
                        <ContextDemo2/>
                    </div>
                </ContentWrapper>
                <ContentWrapper title="unControlInput"><UnControlInput/></ContentWrapper>
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
