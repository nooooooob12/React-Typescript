// Api로부터 정보를 제공받았을때 타입을 알 수 없는 경우

let unknown :unknown;
if(typeof unknown === 'number'){ // 변수의 type을 체크하는 과정
    let b = unknown + 1 // 범위 내의 변수는 number로 체크됨
}

if (typeof unknown === 'string'){
    let b = unknown.toUpperCase(); // 이래도 문제는 발생 x 
}//TypeScript가 강제로 타입 확인작업을 강제하기 때문임

//하지만 아래의 경우 문제 발생

unknown.toUpperCase();


//Void 타입: 아무것도 return하지 않는 함수를 대상으로 함
//아래와 같음.
function hello(){
    console.log('x')
}

const a = hello()
a.toUpperCase() // 이 코드는 허용되지 않음. void 타입에 없는 메소드이기떄문.


//never 타입 : 주로 사용되진 않지만, 함수가 절대 return값을 주지 않고 exeption(예외)만이 발생할때 사용

function hellow():never {
    throw new Error('xxx')
}
// 아래와 같은 경우, name은 string이거나 number이기 때문에 한가지 타입에 대해 코딩할 순 없음. 이와 같은 경우 타입오브를 통해 타입체킹을 하게 됨?
function example(name:string|number){
    if(typeof name==='string'){
        name // string 타입의 name이 추론!
    } else if(typeof name === 'number'){
        name // number 타입의 name이 추론!
    } else{
        name // 위의 타입이 아닌 never타입의 name으로 추론
    }
}

//하지만 위의 코드는 작동하지 않음. name을 파라미터로 받을거고, name은 string이나 number이기 떄문.
// else의 name은 절대 동작할 수 없을것.

//기억하면 좋은 타입은 unknown과 void 라고 함..!
