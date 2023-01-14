import React from 'react';
import { SampleProvider } from './components/Context';
import ReducerSample from './components/reducer';
import Myform from './components/Myform';
import Counter from './components/Counter';
import Greeting from './components/Greeting'

//Hooks & Context API 활용해보기!
const App:React.FC = () => {
  return(
  <SampleProvider>
    <ReducerSample/>
  </SampleProvider>
  )
}

/* //Input React&TS 사용하여 상태관리하는 법 
const App:React.FC=()=>{
  const onSubmit = (form:{name:string,description:string})=>{
    console.log(form)
  }
  return <Myform onSubmit={onSubmit}/>
}
 */
// 기존 react UseState 및 컴포넌트 TS로 만들어보기 (간단실습)
/* const App:React.FC=()=>{
  const onClick = (name:string)=>{
    alert(`${name} says hello`);
  }
  return <Counter/>
  // return <Greeting name="React" onClick={onClick}/>
}
 */
export default App;
