import React, { Component } from 'react';
import Overview from './components/overview';
import uniqid from 'uniqid';

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: {
                text: '',
                id: uniqid()
            },
            arr: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = e => {
        this.setState({ value: { text: e.target.value, id: this.state.value.id } });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ arr: this.state.arr.concat(this.state.value), value: { text: '', id: uniqid() } });
    };
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Item:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.value.text} />
                    <button type="submit">Submit</button>
                </form>
                <Overview list={this.state.arr} />
            </div>
        );
    }
}
