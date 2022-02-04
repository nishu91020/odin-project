import React, { Component } from 'react';

class Overview extends Component {
    // constructor () {
    //     super();
    //     // this.handleClick = this.handleClick.bind(this);
    // }
    // // handleClick = e => {
    //     console.log(e);
    //     // this.props.handleDelete(item);
    // };
    render () {
        const { list } = this.props;
        return (
            <div>
                {list.map(item => {
                    return (
                        <div key={item.id}>
                            {item.itemno}.{item.text}
                            <button onClick={() => this.props.handleDelete(item)}>delete</button>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default Overview;
