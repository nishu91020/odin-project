import React, { Component } from 'react';
class Overview extends Component {
    constructor (props) {
        super();
        // this.handleDelete = this.handleDelete.bind(this);
    }

    // handleDelete = item => {
    //     this.props.list.forEach(thing => {
    //         if (item.id === thing.id) {
    //             this.props.list.splice(thing.index, 1);
    //         }
    //     });
    // };
    render () {
        const { list } = this.props;
        return (
            <div>
                {list.map(item => {
                    return (
                        <div key={item.id}>
                            {item.count}.{item.text}
                            <button>Delete</button>
                            {/* <button onClick={this.handleDelete(item)}>delete</button> */}
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default Overview;
