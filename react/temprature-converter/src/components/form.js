import React, { Component } from 'react';
import InputFeild from './InputFeild';
class Form extends Component {
    constructor (props) {
        super();
        this.state = {
            temp: ''
        };
    }
    handleFarenheitChange () {}
    handleCelsiusChange () {}
    render () {
        return (
            <div>
                <InputFeild type="c" temp={this.temp} handleFarenheitChange={this.handleFarenheitChange} />
                <InputFeild type="f" temp={this.temp} handleCelsiusChange={this.handleCelsiusChange} />
            </div>
        );
    }
}

export default Form;
