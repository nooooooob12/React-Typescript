import React from 'react';
import Counter from './components/Counter';
import Greeting from './components/Greeting'

const App:React.FC=()=>{
  const onClick = (name:string)=>{
    alert(`${name} says hello`);
  }
  return <Counter/>
  // return <Greeting name="React" onClick={onClick}/>
}

export default App;
