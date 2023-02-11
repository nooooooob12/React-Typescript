type Words2 = {
    [key:string]:string
}

class Dict2 {
        private words:Words
        constructor(){
            this.words = {}
        }
        add(word:Word){
            if(this.words[word.term]===undefined){ /
                this.words[word.term] = word.def; //
            }
        }
        def(term:string){
            return this.words[term] 
        }
        static hello(){
            return "hello" //자바스크립트의 스태틱을 이용할수도 있긴함!
        }
    }

class Word2{
    constructor(
        public readonly term:string, // property들을 public으로 두면서 수정작업을 주고 싶지 않을땐 리드온리 속성을 부여해도 됨..
        public  readonly def : string
    ){}
}

const kimchi2 = new Word("Kimchi","한국음식")

const dict2 =new Dict()
dict.add(kimchi);
dict.def("Kimchi")


//2. interface 

type NickName = string
type Health = 1|5|10
type Friends = Array<string>
type Team = "red"|"blue"|"yellow"
type Player = {
    nickName : string,
    team:Team
    health:Health
}
const nicoStd :Player = {
    nickName:"nicoStd",
    team:"red", // red blue yellow 3가지 선택지밖에 주어지지 않음! 위에서 지정해버렸기 때문..!
    health:10
}
//이와 같이 특정 값을 가지게끔만 제한할 수도 있음!

type Food = string;
const kimch:Food = "delicious"

// 타입 콜시그니처는 여러 방면으로 활용이 가능하다.


// interface 다른 유형

interface Players {
    nickName : string,
    team:Team
    health:Health
}
// interface는 한가지 용도만 가지고 있음. 단, 오브젝트의 모양을 특정하기 위함임.
//react.js에서 많이 사용된다고 함. type & interface 두가지 방식으로 사용, type keyword가 조금 더 기능적으로 유용함


interface Hello = string // type과 다르게 이런 alias기능은 사용치 못한다는 단점이 존재..?

// 또 다른 예시 코드

interface User {
    name:string
}
interface Players2 extends User {

}

const nico :Players2 = {
    name :"nico"
}

// type형식으로 작성

type User2 = {
    name:string
}
type Players3 = User & {

}

const nico2 :Players3 = {
    name :"nico"
}

// 둘 다 똑같이 object의 형식을 가지기 위해 사용되었다고 보면 됌.
//오브젝트 모양만을 지정할 생각이라면 interface가 조금 더 선호됨..? 객체지향 프로그래밍과 비슷하다고 함.



interface User {
    name:string
}

interface User {
    lastname:string
}

interface User {
    health:number
}

const playerUser:User = {
    name:"nco",
    lastname:"n",
    health:10
}

// 타입은 이와 같은 형태를 가질 수 없음. 인터페이스가 타입보다 조금 더 좋은 합체능력을 지녔다 생각하면됨.
// 결론 : 아무거나 써도 상관은 없다. 개발 방향에 따라 자유롭고 유연하게 사용하면 좋다!
