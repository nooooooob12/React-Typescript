import React from 'react';
import { useState } from 'react';
import { useTransition } from 'react';
function UseTransition(){
    const [isPending, startTransition] = useTransition(); // isPending => 보류상태 표기
    const [count,setCount] = useState(0);
    function handlerUst() {
        startTransition(()=>{
            setCount(c=> c+1);
        })
    }
        return (
            <div>
                {isPending && <h2>헤헤</h2>}
                <button onClick={handlerUst}>{count}</button>
            </div>
        );
}


export default UseTransition;