import React,{useState,useEffect} from 'react';

function FormExample(){

    //1. name State 변수 사용
    const [name,SetName] = useState('Marry');

    //2. Effect를 사용해 폼데이터 저장
    useEffect(function persistForm(){
        if(name !== ''){ // 조건문은 Hook보다 차상위에서 부를수 없다.. 조건부 렌더링이 필요하다면 Hook 호출 후 조건문을 달아두자!
        localStorage.setItem('FormData',name) 
    }
    });
    //3.suraname이라는 변수 state 사용
    const [suraname,setSuraname] = useState('Poppins')
    //4.Effect를 사용해서 제목 업데이트
    useEffect(function updateTitle() {
        document.title = name + ' ' + suraname;
    })
}

function UseEffectHook() {
    return (
        <div>
      </div>
    );
}

export default UseEffectHook;