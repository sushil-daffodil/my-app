 import React, { Component } from 'react';
 import {createStore, applyMiddleware} from 'redux'
 import {Provider, connect} from 'react-redux';
 import {reducer,actions,logger} from './redux'
let store = createStore(
    reducer,
    applyMiddleware(logger)
);
 class Counter extends Component {
     render() {
         const { value, onIncreaseClick } = this.props;
         return (
             <div>
                 <span>{value}</span>
                 <button onClick={onIncreaseClick}>Increase</button>
             </div>
         )
     }
 }

let App = connect(state=>{
    console.log("updated state>>>"+state.count)
return {value:state.count};
}, {onIncreaseClick:actions.increaseAction})(Counter);

export default React.createClass({
    render: _=><Provider store={store}><App /></Provider>
})
