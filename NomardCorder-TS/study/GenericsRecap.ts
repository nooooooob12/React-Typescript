// Generic(제너릭) 복습
// Generic타입은 기본적으로 Placeholder를 사용해서 개발자가 작성한 코드를 기준으로 타입을 지정

type Superprint = <T,S>(a:T[],b:S)=>T 

const superPrints:Superprint =(a) =>a[0]

const a = superPrints([1,2,3,4],"x") // placeholder가 입력코드에 따라 타입을 추론해서 지정해버림! 실제로 number타입으로 지정 돼 있음
const b = superPrints([true,false,false,true],2)//위는 number인데 얘는 bool!

//그렇다면 any를 넣으면..? 상관없을수도 상관 있을수도 있음!
//하지만 보호장치가 사라져버림... 그래서 위험하기도 함.

//superPrints는 배열의 첫번째를 리턴하는데, 이와 같은 함수를 사용할때
// 만약 서로 다른 타입을 가져야한다면 제너릭을 사용해야한다!
//제너릭을 처음 인식했을 때 순서를 기반으로 타입을 인식함.
