import React from 'react';
import { useState } from 'react';

type MyformsProps={
    onSubmit:(form:{name:string; description:string})=>void;
}

function Myform({onSubmit}:MyformsProps) {
    const [form,setForm] = useState({name:'',description:''});
    const {name,description} = form;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        //event 인자값 타입을 정하지 못하였을때, any로 모든 타입을 적용시킨다?
        // 이후 작성한 onChange 함수의 도움말에서 제공되는 타입을 확인한 뒤 타입으로 지정시켜줌(React.ChangeEventHandler<HTMLInputElement>)
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value
        });
    };
    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        //여기도 동일하게 적용
        e.preventDefault(); // 기존에 걸린 이벤트 막기
        onSubmit(form);
        setForm({
            name:'',
            description:'',
        })//다시 처음 공백으로 초기화시킴
    }
    return (
        <div>
            <form action="" onSubmit={handlerSubmit}>
                이름:<input name='name' value={name} onChange={onChange} /> <br />
                설명:<input name='description' value={description} onChange={onChange} /> <br />
            <button type='submit'>등록하기</button>
            </form>
        </div>
    );
}

export default Myform;