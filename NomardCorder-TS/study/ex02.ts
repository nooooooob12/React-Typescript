let a = 'hello' // 타입스크립트는 이 변수를 추론하여 String으로 변환해줌.
a = 'bye'
//이와 같은 작업은 위에서 추론한 string타입을 string타입의 bye라는 값으로 변환했기 때문에 에러는 발생하지 않음.

a = 1
//하지만 이와 같이 type을 변환하려고 한다면 에러를 도출함.
// JavaScript는 이런 상황에 있어서도 개발자에게 에러를 보여주지 않음.

let b:boolean = "x"
//위의 경우에는 boolean으로 변수의 타입을 명시해주었지만, 값으로 string값을 넣었기 때문에 에러를 도출.
//명시적으로 지정해준 경우, 지정한 타입에 대한 값으로 변경해줘야함.
b = false

let c = false   
//위와 같이 명시하지 않고도 사용할 수 있고 결과는 같지만 코드가 짧아 가독성이 좋을수는 있으나 추천하지는 않음.
//let b:boolean과 같은 명시적인 체크를 추천함.

let d : number[] = [] // number의 값을 가진 array임을 명시
d.push(1)
//만약 d.push('1')과 같은 string값으로 array에 추가하려고 한다면 에러가 발생함.
//이는 ts의 보호장치가 제대로 이루어지고 있다는 것을 알 수 있음.

//이 외에도 아래와 같은 경우도 예시로 들 수 있음.
const players = {
    name: "nico"
}
player.name = 1
// 이 것은 name값이 string으로 추론되는 과정에서, number값을 추가하려 했기 때문임.

// Ts를 이용한 string, number, array 타입에 대해 알아볼 수 있는 시간이었음.
