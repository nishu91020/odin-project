import React, { useEffect, useState } from 'react';

function Timer () {
    const [ time, setTime ] = useState(new Date());
    useEffect(() => {
        const tick = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearTimeout(tick);
    });
    return (
        <div>
            <h1>Time is {time.toLocaleTimeString()}</h1>
        </div>
    );
}

export default Timer;
