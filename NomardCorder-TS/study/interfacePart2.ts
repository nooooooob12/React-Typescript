//추상 클래스와 그 안에 추상메소드 두개를 만들어낼 것임. 이는 상속을 강제하기 위함
// 추상 클래스는 상속받는 클래스가 어떻게 작동해야 하는지는 알려줄수 있기 때문에 유용하다고 봄

abstract class User {
    constructor(
        protected firstName : string,
        protected lastName:string
    ){}
    abstract sayHi(name:string):string 
    abstract fullName():string
}


class player extends User {
    fullName() {
        return `${this.firstName} ${this.lastName}` 
    }
    sayHi(name: string) {
        return `Hello ${name}. My Name is ${this.fullName()}`
    }
}

// 추상 클래스를 인터페이스로 리팩토링하는 과정
interface User {
    firstname : string,
    lastname:string,
    sayHi(name:string):string 
    fullName():string
}
interface Human {
    health:number
}
//새로운 인터페이스를 작성하여 동시에 상속할수도 있음.


class player implements User,Human { // implements를 쓰면 코드가 가벼워짐.
    constructor(
        public firstName:string, // 얘네는 신기하게 private나 protected가 허용되지 않음.
        public lastName : string,
        public health : number
    ){
        fullName() {
            return `${this.firstName} ${this.lastName}` 
        }
        sayHi(name: string) {
            return `Hello ${name}. My Name is ${this.fullName()}`
        }
    }
}

//이렇게 쓰는 이유 : 고유한 사용처 & 클래스의 모양을 알려준다는 점에서 매우 유용하며, 사이즈를 줄이는데 좋다..
//문제점 : private나 protected를 사용할 수 없다 정도..



//아규먼트에 인터페이스를 설정할 수도 있고, 이는 class를 만들고 new class를 하는것과는 다른 형식의 사용임을 알아야함.
