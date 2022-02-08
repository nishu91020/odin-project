import { useState } from 'react';
import './App.css';
import Timer from './timer';

function App () {
    const [ count, setCount ] = useState(0);
    const handleAdd = () => {
        setCount(count + 1);
    };
    const handleSub = () => {
        setCount(count - 1);
    };
    return (
        <div className="App">
            <h1>Count={count}</h1>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleSub}>SUB</button>
            <Timer />
        </div>
    );
}

export default App;
