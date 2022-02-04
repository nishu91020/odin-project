import React, { Component } from 'react';
import Overview from './components/overview';
import uniqid from 'uniqid';

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: {
                text: '',
                id: uniqid(),
                itemno: 1
            },
            arr: [],
            count: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete = item => {
        let temp = this.state.arr;
        temp.forEach(thing => {
            if (item.id === thing.id) {
                temp.splice(thing.index, 1);
            }
        });

        this.setState({ arr: temp });
        // let tempArr = this.state.arr;
        // console.log(tempArr, this.state.count);
        // this.setState({ arr: [], count: 1 });
        // tempArr.forEach(ele => {
        //     this.setState({
        //         arr: this.state.arr.concat({ text: ele.text, id: ele.id, itemno: this.state.count }),
        //         count: this.state.count + 1
        //     });
        // });
    };

    handleChange = e => {
        this.setState({ value: { text: e.target.value, id: this.state.value.id, itemno: this.state.count } });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ arr: this.state.arr.concat(this.state.value), value: { text: '', id: uniqid(), itemno: this.state.count }, count: this.state.count + 1 });
    };
    render () {
        const { value, arr } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Item:</label>
                    <input type="text" onChange={this.handleChange} value={value.text} />
                    <button type="submit">Submit</button>
                </form>
                <Overview list={arr} handleDelete={this.handleDelete} />
            </div>
        );
    }
}
