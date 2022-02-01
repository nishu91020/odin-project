import React, { Component } from 'react';
class Overview extends Component {
    render () {
        return (
            <ul>
                {this.props.list.map(item => {
                    return <li key={item.id}>{item.text}</li>;
                })}
            </ul>
        );
    }
}
export default Overview;
