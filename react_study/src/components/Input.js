import React,{useState,useRef} from 'react';
const Input = () => {
    const [inputs, setinputs]  = useState({
        name:'',
        nickname:''
    });
    const nameInput = useRef();
    const {name,nickname} = inputs;
    const onChange = (e) => {
        const {value,name} = e.target;
        setinputs({
            ...inputs,
            [name]:value
        }); 
    };
    const onReaset = () => {
        setinputs({
            name:'',
            nickname:''
        })
        nameInput.current.focus()
    }
    return (
        <div>
            <input name="name" placeholder='이름' onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder='별명' onChange={onChange} value={nickname}/>
            <button onClick={onReaset}>초기화</button>
            <div>
                <b>값:</b>
                {name}({nickname})

            </div>
        </div>
    );
};

export default Input;