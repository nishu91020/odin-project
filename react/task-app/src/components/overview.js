import React, { Component } from 'react';
class Overview extends Component {
    render () {
        const { list } = this.props;
        return (
            <ul>
                {list.map(item => {
                    return <li key={item.id}>{item.text}</li>;
                })}
            </ul>
        );
    }
}
export default Overview;
