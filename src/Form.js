import React from "react";
import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer class  Form extends React.Component{
    constructor(props,context){
        super(props, context);
        this.store = observable.map({});
    }
    render(){
        return (
        <div>
            <input value={this.store.get("name")} type="text" onChange={(e) => this.store.set("name", e.target.value)}/>

        </div>);
    }
}
export default Form;