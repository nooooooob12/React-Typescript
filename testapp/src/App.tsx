import React from 'react';
import Greeting from './Greeting'

const App:React.FC=()=>{
  const onClick = (name:string)=>{
    console.log(`${name} says hello`);
  }
  return <Greeting name="React" onClick={onClick}/>
}

export default App;
