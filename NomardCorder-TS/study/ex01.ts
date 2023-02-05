function divide(a,b) {
    return a/b
}

console.log(divide('hello'))
//두개의 입력값(아규먼트)가 존재하지만, 하나만 줬기에 에러를 표출
//자바스크립트에서는 코드실행 전 에러를 보여주지 않음. 코드도 정상적으로 실행되며, Nan값을 반환함

const player = {
    age:12
}
player.age = false
// age를 숫자로 지정한 상태에서, false라는 boolean값으로 바꿀수 없다고 코드 실행전 띄워주고 있음.
// 이처럼 자바스크립트에선 제공되지 않은 보호장치가 제공된다는 것.
