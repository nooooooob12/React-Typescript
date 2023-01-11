import React from 'react';

type GreetingProps = {
    name:string;
    mark: string;
};
//.FC를 사용할때 -> props type을 Generics(?)으로 넣어서 사용. (제너릭 타입은 타입에 유연성을 제공하여 컴포넌트 등에서 재사용을 가능하게 해주는 타입)
// any 타입과 유사하지만 다름 모든 타입을 유연하게 동적으로 사용할 수 있게 해주기 위해 제너릭 타입을 사용한다고 함!
const Greetings=({name,mark}:GreetingProps)=>(
<h2>{name}...{mark}</h2>

)
Greetings.defaultProps = {
    mark:'!'
};
export default Greetings;