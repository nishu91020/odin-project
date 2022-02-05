import React from 'react';
import './App.css';
import Counter from '../src/components/counter.js';
export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            mount: true
        };
        this.unmount = this.unmount.bind(this);
        this.mount = this.mount.bind(this);
    }
    unmount = () => {
        this.setState({ mount: false });
    };
    mount = () => {
        this.setState({ mount: true });
    };

    render () {
        return (
            <div className="App">
                {this.state.mount ? <Counter /> : null}
                <button onClick={this.mount} disabled={this.state.mount}>
                    Mount
                </button>
                <button onClick={this.unmount} disabled={!this.state.mount}>
                    Unmount
                </button>
            </div>
        );
    }
}
