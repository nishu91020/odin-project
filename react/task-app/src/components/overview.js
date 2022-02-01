import React from 'react';

const Overview = props => {
    const { list } = props;
    return (
        <ul>
            {list.map(item => {
                return <li key={item.id}>{item.text}</li>;
            })}
        </ul>
    );
};
export default Overview;
