//read only 속성을 부여할 수도 있음.

type AGE = number;
type Name = string;
type player = {
    readonly name:Name // readonly 속성 부여시, 수정시도하면 에러를 보여주는 멋진 속성임
    age?:AGE
}


const numbers: readonly number[] = [1,2,3,4,5]
numbers.push(1) // 이와 같은 에러는 push라는 메소드가 readonly number타입에 존재하지 않아서다??

//비슷한 예제, map과 filter 함수는 작동하나 push는 작동하지 않음.
const names: readonly string[] = ["1","2"]
names.push('Kim') //array에 변형을 주기때문에 사용이 안됌?
names.map(name=>names.concat("4")) // 직접적으로 변형시키지 않기 떄문에 상관x
names.filter(name=>names.length>0) // 위와 동일

//tuple형식 생성방법
const player:[string,number,boolean]=["nico",13,true]
//순서에 유의해야함. 달라지면 동작하지 않음. 똑같이 readonly 속성을 부여할 수 있음.

//any타입 : 모든 속성이 될 수 있음. TS의 보호장치를 벗어나고자 할 때 사용되기도 함

const Example : any[]=[1,2,3,4,5]
const Example2: any = true
Example + Example2 // any로 보호장치를 벗어났기 때문에 동작하는것처럼 보임.
//때론 any를 통해 보호장치를 벗어나 개발하는 것이 좋을수도 있다고 함..

