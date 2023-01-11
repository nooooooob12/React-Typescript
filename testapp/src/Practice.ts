let message:string = 'hello TypeScript!'
// message:number = 1;//number' only refers to a type, but is being used as a value here.
console.log(message)
let count:number = 0;
count += 1
// count += '갑자기 분위기 스트링' //Type 'string' is not assignable to type 'number'
const numbers:number[] = [1,2,3] 
const res:(string|number)[] =[1,2,'3']
const only:any[]=[0,1,3,"가",{},[true]]
let rgbColor:[number,number,number] = [32,32,32] // 튜플로 타입과 원소갯수 크기 등을 고정하여 사용할 수 있음

enum Avengers{capt,B2B,Thor}; // 열거형 변수, 따로 지정하지 않으면 앞의 원소부터 index 0 지정, index로도 접근이 가능 but, Tree-shaking되지 않으므로 비추천??? 무슨소린지 모르겠으나.. 일단 Ok...

let hero:Avengers = Avengers.capt;
// hero:Avengers=Avengers[0] // Index로도 접근이 가능하다곤 함!

export{}