import React,{useState} from 'react';

function UseStateHook() {
    const [count,setCount] = useState(0); // State변수 선언 변수명은 상관x 0으로 초기화함
    const [fruit, setFruit] = useState('banana');
    function ExampleHandlerOrangeClick(){
        setFruit('Orange')
    }
    return (
        <div>
            <h2>count UseState</h2>
            <p>You Clicked {count}</p>
            <button onClick={()=>setCount(count +1)}>Click</button>
            <hr/>
            <h2>fruit UseState</h2>
            <p>Your Like Fruit? {fruit}</p>
            <button onClick={()=>ExampleHandlerOrangeClick()}>내가 좋아하는 과일은?</button> /** 리렌더링 문제가 발생할수 있었음... 화살표 함수 기억하자.. */
        </div>
    );
}

export default UseStateHook;