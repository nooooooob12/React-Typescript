function SuperPrint<T>(a:T[]){
    return a[0]
}

const A = SuperPrint([1,2,3,4])
const B = SuperPrint<number>([1,2,3,4])
// 똑같은 코드!



type Player<E> = {
    name:string
    extraInfo:E // 어떤 타입으로든 변환 가능하게 하고 싶음. 하지만 any를 사용시 보호받지 못하므로 제너릭으로 선언!
}
type NicoExtra = {
    favFood:string
}
type PlayerStudent =Player<NicoExtra>

//type끼리의 재사용(상속의 개념??)으로 코드를 확장/재사용 할 수 있음.

const NicoStudent:Player<{favFood:string}> = {
    name:"Hayeongjin",
    extraInfo:{
        favFood:"beef"
    }
}

const lynn:Player<null> = {
    name:"lynn",
    extraInfo:null
}


//제너릭은 아래와 같이 변형하여 사용하는것도 가능!

type arrNumbers = Array<number>
const ex_b:arrNumbers = [1,2,3,4]

