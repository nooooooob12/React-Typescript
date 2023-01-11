import React from 'react';

type GreetingProps = {
    name:string;
    mark: string;
    optional?: string;
    onClick:(name:string)=>void // onClick 이벤트 핸들러가 활성화 되었을때 name 타입이 string이면 아무것도 리턴하지 않는다 ?
};
//React.FC를 사용할때 -> props type을 Generics(?)으로 넣어서 사용. (제너릭 타입은 타입에 유연성을 제공하여 컴포넌트 등에서 재사용을 가능하게 해주는 타입)
// any 타입과 유사하지만 다른점 -> 모든 타입을 유연하게 동적으로 사용할 수 있게 해주기 위해 제너릭 타입을 사용한다고 함! (함수가 선언될 때 타입이 결정)
//Generic은 함수를 타이핑 해주지만, 인수를 타이핑 해주지는 않는다 + Children을 기본적으로 포함하기 떄문에 defaultProps를 포함할 수 없게 된다?

//1. React.FC(제너릭) 사용형태

/* const Greetings:React.FC<GreetingProps>=({name})=>{
    return <h2>{name}__</h2>
}
 */

//2. 제너릭을 사용하지 않았을때의 형태(defaultProps가 활성화됨) * 많은 사람들이 이 형태를 권장하고 있음.

/* const Greetings=({name,mark}:GreetingProps)=>(
<h2>{name}...{mark}</h2>

) */

//3.컴포넌트 내에서 특정 함수를 Props로 받아올 때 사용할 수 있는 방식(타입지정)

function Greetings({name,mark,optional,onClick}:GreetingProps) {
    const handleronClick = () => onClick(name);
    return(
        <>
            <div>
                Hello, {name}{mark}
                {optional && <p>{optional}</p>}
            </div>
            <div>
                <button onClick={handleronClick}>ClickMe</button>
            </div>
        </>
    )
}

Greetings.defaultProps = {
    mark:'!',
};
export default Greetings;