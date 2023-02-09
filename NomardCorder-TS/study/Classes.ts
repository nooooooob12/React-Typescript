//TypeScript에서 class를 만들어내는 법.


class Players {
    constructor( // typeScript는 파라미터를 써주면 알아서 constructor함수를 만들어줌!
        private firstName:string,
        private lastName:string,
        //private는 typescript가 개발자에게 보호장치를 제공하기 위해 사용된 것이므로, JS코드 변환시 보이지 않음.
        public nickName:string
    ){}
}

const nicoStd = new Players ('Ha','yeongjin',"학생")

// nicoStd.firstName 동작 x private는 js코드 내에서 찾아볼 수 없지만 ts 내부에서 제공되어 지는 보호장치..?
nicoStd.nickName //요건 퍼블릭이라 가능!


//추상클래스 만들어보기
//상속만을 제공하는 기능, 메소드 제공도 가능

abstract class User {
    constructor(
    private firstName:string,
    private lastName:string,
    public nickName:string
){}
 abstract getNickName(arg:string):void // 리턴값이 없는 추상메소드..
 getFullName(){
    return `${this.firstName} ${this.lastName}`
 }
}

class Player2 extends User{
 getNickName(arg:string){
    console.log(this.nickName) // 만약 nickname이 private로 구성되어 있다면, 상속을 받았더라도 사용할수 없음.
    //그래서 왜냐하면 protected를 사용하는걸 권장함. 상속받은 단계에선 접근을 허용할 수 있기 때문!
 }
 }

