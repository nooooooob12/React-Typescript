import React from 'react';
    // 중괄호로 감싼 구조분해 문법을 통해 props를 생략하게 됨?
const Wrapper = ({children}) => {
    const sty = {
        border:'2px solid black',
        padding:'13.2px'

    }
    return (
        <div style={sty}>
            {children}
        </div>
    )
};

export default Wrapper;