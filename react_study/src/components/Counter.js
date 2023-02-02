import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { IncreseCounter } from '../Reducer/counter';
// Componet에서 Redux를 사용하는 단계 예제

const Counter = () => {
    //dispatch를 사용하기 위함 !
    const dispatch = useDispatch();
    //Store에 접근한 뒤 state값 가져와 사용하기 위함!
    const {count} = useSelector(state=>state.counter);
    
    const increse = () => {
        dispatch(IncreseCounter())
    };
    return (
        <div>
            {count}
            <button onClick={increse}>증가</button>            
        </div>
    );
};

export default Counter;