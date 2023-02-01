import React from 'react';
import { useState } from 'react';
import { useTransition } from 'react';
import UseReducer from './UseReducer';
function UseTransition(){ //상태변화의 우선순위를 지정하기 위해 사용하는 ReactHook!
    const [isPending, startTransition] = useTransition(); // isPending => 보류상태 표기
    const [count,setCount] = useState(0);
    function handlerUst() {
        startTransition(()=>{
            setCount(c=> c+1);
        })
    }
        return (
            <div>
                {isPending && <UseReducer/>}
                <button onClick={handlerUst}>{count}</button>
            </div>
        );
}


export default UseTransition;