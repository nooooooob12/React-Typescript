//일반적인 함수 선언방식
function Add(a:number,b:number) {
    return a+b
    
}
//Arrow function
const add = (a:number,b:number)=>a+b

//example callsignatures 만들어보기

type Add = (a:number,b:number) =>number

const add2:Add = (a,b) => a+b


//1.오버로딩 : 함수가 여러개의 콜 시그니쳐를 가지고 있을때 발생함.

type Add3 = {
    (a:number,b:number):number
    (a:number,b:string):number
//a는 항상 number타입, b는 number|string임.
//이런경우 add함수의 연산은 성립할 수 없게 됌. 코드를 동작 시키기 위해선 아래와 같은 방식이 강제됨.
}
const add3:Add3 = (a,b) =>{
    if(typeof b === 'string') return a
    return a+b
}

//next.js에서의 예시 , 패키지나 라이브러리를 디자인 할 때 많이 사용되는 방식임.
type Config = {
    path:string,
    state:object
}

type Push = {
    (path:string):void,
    (config:Config):void
}

const push:Push = (config) =>{
    if(typeof config === 'string'){console.log(config)}
    else{
        console.log(config.path)
    }
}
// 여러개의 argument를 가졌다고 할 때의 경우 예시

type Add4 ={
    (a:number,b:number) : number
    (a:number,b:number,c:number):number
//typescript는 c를 옵션으로 보고 있기 때문에 이에 대한 명시를 해줘야함.
}
const add4:Add4 = (a,b,c?:number) =>{//c를 선택적 파라미터임을 명시, 타입을 지정해주면 에러가 발생 x
    return a+b
}