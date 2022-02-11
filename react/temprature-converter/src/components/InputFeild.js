import React, { Component } from 'react';

class InputFeild extends Component {
    constructor (props) {
        super();
        this.changeTemp = this.changeTemp.bind(this);
    }
    changeTemp (e) {
        this.setState({ value: e.target.value });
    }
    render () {
        return (
            <feildset>
                <legend>Enter temprature in {this.props.type}</legend> <input value={this.props.temp} onChange={this.changeTemp} />
            </feildset>
        );
    }
}

export default InputFeild;
