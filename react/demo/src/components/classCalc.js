import React, { Component } from 'react';

export default class Calc extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        };
        this.addOne = this.addOne.bind(this);
        this.subOne = this.subOne.bind(this);
        this.modTwo = this.modTwo.bind(this);
    }
    addOne () {
        this.setState({ count: this.state.count + 1 });
    }
    subOne () {
        this.setState({ count: this.state.count - 1 });
    }
    modTwo () {
        this.setState({ count: this.state.count % 2 });
    }
    render () {
        return (
            <div>
                <h3>count= {this.state.count}</h3>
                <button onClick={this.addOne}>add 1</button>
                <button onClick={this.subOne}>Sub 1</button>
                <button onClick={this.modTwo}>mod 2</button>
            </div>
        );
    }
}
