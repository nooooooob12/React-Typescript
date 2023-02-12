//1.다형성,제네릭,클래스, 인터페이스를 모두 합쳐 사용해 보는 예제

//로컬스토리지를 닮은 API Class를 만들어보기
interface SStorage<G> {
    //typescript에 의해 이미 선언된 인터페이스임을 마우스오버를 통해 알아볼 수 있음.
    [key:string]:G
}
class LocalStorage<G> {
    private storage: SStorage<G> = {}
    set(key:string, value:G){
        //API와 유사한 디자인을 구현해 볼 것.
        this.storage[key] = value; 
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):G{
        return this.storage[key]
    }
    clear(){
        this.storage = {} 
    }
}

//위와 같은 클래스를 사용하고자 한다면 아래처럼 이용

const stringStorage = new LocalStorage<string>()
stringStorage.get("ket")// argument로 key:string을 받고 리턴으로 generic을 받으나, generic이 string으로 동작할것
stringStorage.set("hello","Name?")
const booleanStorage = new LocalStorage<boolean>()
booleanStorage.get("ket")
booleanStorage.set("hello",true) //value는 generic으로 받은 boolean값이 되어야 함!

