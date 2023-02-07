//다형성
type SuperPrint ={
    (arr:number[]):void
    (arr:boolean[]):void
}

const superPrint:SuperPrint = (arr) =>{
    arr.forEach(i=>console.log(i))
}
superPrint([1,2,3,4])
superPrint([true,false,false])
//하지만 위의 콜 시그니처에서 지정된 타입이 아닌 경우에는 동작하지 않음

superPrint(["A,","B"])

//이런 경우 콜 시그니처에 타입을 추가하는 것보다 좋은 방식이 있음!
//concreate type : number string boolean void  unknown 타입이 모두 포함된 타입임!
//또, generic이란 concreate타입을 대신 사용 할 수 있는 것. placeholder와 같다고 생각하면 됨!

superPrint([1,2,true,false])

//generic을 사용하는 이유 : 정확히 어떤 타입이 콜 시그니처에 들어가야되는지 장담하지 못 할 때!!


type SuperPrint2 = {
    <TypePlaceholder>(arr:TypePlaceholder[]):void //<>안에는 무엇이던 올 수 있음. 이는 그냥 generic을 사용한다고 알려주는 것 뿐!
}
const superPrint2:SuperPrint2 =(arr)=>{
    arr.forEach(i=>console.log(i))
}
superPrint2([1,2,true,false])
superPrint2(["A,","B"])
//위에서는 에러였던 코드가 더 이상 에러가 아니게 됨! 이게 generic이다!
//값을 보고 TypeScript가 자동으로 발견한 타입으로 작성해준다.. 편리할수도..?


//리턴 타입을 바꾸고 싶은 경우 => 배열을 받는 경우
type SuperPrint3 = {
    <TypePlaceholder>(arr:TypePlaceholder[]):TypePlaceholder //<>안에는 무엇이던 올 수 있음. 이는 그냥 generic을 사용한다고 알려주는 것 뿐!
}
const superPrint3:SuperPrint3 = (arr) => arr[0]
const abc = superPrint3([1,2,3,4])
const bcd = superPrint3(["A,","B"])
const ccd = superPrint3([1,2,true,false])