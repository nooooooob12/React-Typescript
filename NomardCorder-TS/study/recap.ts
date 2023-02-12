//1.다른 클래스들이 특정 형태를 띄게 하고자 한다면 인터페이스를 사용하는것이 좋음.
//- 복습 : 타입을 지정하고 싶다면 type을 쓰면 됌.

type Player = {
    name : string
}
// interface를 사용할땐 아래와 같이 사용

interface PlayerB {
    name:string
}

// 둘 다 똑같이 오브젝트 형태를 띄게 만들며, 타입을 지정하는 방식으로 공동 목표는 같음.

//타입을 상속하고자 한다면 Type의 경우 새로운 타입을 만들어냄

type PlayerAA = Player & {
    lastName : string
}

const playerA : PlayerAA = {
    name : "nico",
    lastName:"xxx"
}

//type의 경우, 추가적으로 상속을 하고자 할 때 아래와 같은 방식은 동작하지 않음.
type PlayerAA = {
    health : number
}

// 인터페이스의 경우 상속은 아래와 같은 방식으로 이루어짐

interface PlayerBB extends PlayerB {
    lastName:string
}

const playerB:PlayerBB = {
    name : "nico",
    lastName: "xxx",
    health : 1|2
}

//interfaec의 경우에는 위의 추가 상속 코드에 대한 상황이 동작할 수 있음.

interface PlayerBB  {
    health:number
}

// 위의 두 방식은 추상클래스를 대체하여 사용할 수 있음.

type PlayerC = {
    firstName:string
}
interface PlayerD {
    firstName:string
}

class Users implements PlayerC,PlayerD {
    constructor(
        public firstName:string
    ){}
}

// 클래스나 오브젝트의 모양을 정의하고자 한다면 interface를 사용, 그 외의 목적에선 type을 권장.
// 타입 alias나 특정 값으로 제한하는 경우 type을 사용하길 권장.
//interface의 기능을 type이 대부분 다 가지고 있지만, interface는 재상속이 가능하다는 장점이 있음.
//type은 새로운 타입을 만든 다음 &(AND)연산자 등을 통해 합집합의 타입을 만들어낼 수 있음.
 