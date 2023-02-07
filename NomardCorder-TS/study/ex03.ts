let a : number = 1;
let b : string = "nico"
let c : boolean[] = [true]
// 전 시간에 공부했던 타입들임.
// 타입을 명시적으로 적기 위해서는 변수명 : 타입 형식으로 생성하면 됨.
// 하지만 꼭 명시적으로 표기할 필요는 없음. 필요에 따라서는 타입을 자동추론 하게 하는것도 좋음.


//object를 타입스크립에서 사용하려면?
//const player:object라는 형식의 사용은 되지 않음.
//사용했을때 player 내부에 정의된 키/벨류값을 불러올 수 없는 문제가 야기됨.

const players = {
    name:'nico' // Ts에서 name 키 값의 타입을 string으로 자동추론하고 있음.
    
}
//만약 name은 필수적으로 가지고 있고, 필요에따라 age를 표기해야하는 경우에는 아래와 같이 사용가능.
const playerNico : {
    name:string,
    age?:number // ?를 넣음으로써 선택적 변수 선언을 함
} = {name :"nico"}

//만약 추가로 플레이어들이 생긴다면 이런식으로 반복해서 쓸것인가?
const PlayerLynn : {
    name:string;
    age?:number
} = {name:'Lynn'}

//보통 이런 경우엔 alias를 통해 간략화 시킬 수 있음.
type Age = number;
type Player = {
    name:string;
    age?:number
}

const nico:Player = {
    name:'nico',
    age:12
}
const Lynn:Player = {
    name:'Lynn',
}

//Alias를 통해 const & let 변수에 타입을 지정하는 대중적인 방식??

//1.함수로 만드는 방식

function PlayerMaker(name:string):player{
    return {
        name:name, // 같은 이름을 가질 시 생략은 가능함!
    }
}
const nico = PlayerMaker() // argument가 없기 떄문에 에러 발생
console.log(PlayerMaker('nico'))
//만약 age라는 것을 더 만들고 싶다! 한다면 아규먼트 뒤에 Alias를 주면됨
nico.age = 12


//Arrow 함수는 아래와 같은 방식으로도 만들수 있음

const PlayerMakers = (name:string):Player => ({name})
