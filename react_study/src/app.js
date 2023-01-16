import React from 'react';
import Hello from './components/Hello';
import MultiProps from './components/MultiProps';

const App = () => {
    return (
        <div>
            <Hello name="hayeongjin"></Hello>
            <MultiProps name="Yolo" color="red"></MultiProps>
            <MultiProps/>  
        </div> //3번째 Tag의 경우, defaultProps를 지정함으로써 프롭스값을 지정해주지 않아도 기존값이 설정되어 들어가 렌더링됨.
    );
};

export default App;