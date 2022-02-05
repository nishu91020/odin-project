import React, { Component } from 'react';

export default class Counter extends Component {
    constructor (props) {
        console.log('constructor');
        super(props);
        this.state = { count: 0 };
        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
    }
    Increment () {
        this.setState({ count: this.state.count + 1 });
    }
    Decrement () {
        this.setState({ count: this.state.count - 1 });
    }
    componentDidMount () {
        console.log('Component mounted');
        console.log('**********************');
    }
    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log('Component Updated');
        console.log('**********************');
    }
    componentWillUnmount = () => {
        console.log('component unmounted');
        console.log('**********************');
    };
    render () {
        console.log('render');
        return (
            <div>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
                <h1>Count = {this.state.count}</h1>
            </div>
        );
    }
}
