import React, { useState } from 'react';

const FunCalc = () => {
    const [ count, setCount ] = useState(0);
    const addOne = () => {
        setCount(count + 1);
    };
    const subOne = () => {
        setCount(count - 1);
    };
    const modTwo = () => {
        setCount(count % 2);
    };
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={addOne}>add 1</button>
            <button onClick={subOne}>sub 1</button>
            <button onClick={modTwo}>mod 2</button>
        </div>
    );
};

export default FunCalc;
