import React, { Component } from 'react';
import './App.css';
import FunCalc from '../src/components/functionalCalc';
import Calc from '../src/components/classCalc';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        };
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }
    incrementCount () {
        this.setState({ count: this.state.count + 1 });
    }
    decrementCount () {
        if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
    }
    render () {
        return (
            <div className="container">
                <h4>count={this.state.count}</h4>
                <button onClick={this.incrementCount}>+</button>
                <button onClick={this.decrementCount}>-</button>
                <FunCalc />
                <Calc />
            </div>
        );
    }
}

export default App;
