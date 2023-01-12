import React, { useState } from 'react';
import './Counter.scss'

function Counter(){
    const [counter,Setcounter] = useState<number>(0);
    const onClickCounter = () => Setcounter(counter+1);
    const onClickDcounter = () => Setcounter(counter-1);
    return (
        <>
        <div>
            <h2>{counter}</h2>
        </div>
        <div>
            <button onClick={onClickCounter}>Plus</button>
            <button onClick={onClickDcounter}>Minus</button>
        </div>
        </>
    );
}

export default Counter;