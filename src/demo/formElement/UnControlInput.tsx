import React from "react";

export class UnControlInput extends React.Component<any, any> {
    private readonly inputRef: any;

    constructor(props: any) {
        super(props);
        this.inputRef = React.createRef()
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        alert('我们可以获得input内的值为: ' + this.inputRef.current.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <input defaultValue="123" ref={this.inputRef}/>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}
